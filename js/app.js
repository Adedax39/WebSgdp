document.addEventListener("DOMContentLoaded", function () {
  console.log("app.js is running!");

  const contentDiv = document.getElementById("content");

  if (!contentDiv) {
    console.error("Content div not found in the parent document!");
    return;
  }

  console.log("Content div found! Ready to load content.");

  function loadContent(page) {
    const pagePath = `/src/pages/${page}/${page}.html`;
    fetch(pagePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Page not found: ${pagePath}`);
        }
        return response.text();
      })
      .then(html => {
        contentDiv.innerHTML = html;
        console.log(`Successfully loaded: ${pagePath}`);
      })
      .catch(error => {
        console.error("Error loading content:", error);
        contentDiv.innerHTML = `<h1>404 - Page Not Found</h1><p>Could not load ${pagePath}.</p>`;
      });
  }

  // Load the splashscreen first, then load the home page after 5 seconds
  loadContent("splashscreen");
  setTimeout(() => {
    loadContent("home");
  }, 5000);

  // Function to load content into an iframe by setting its src attribute
  function loadFrame(id, filePath) {
    const frame = document.getElementById(id);
    if (frame) {
      frame.src = filePath;
    } else {
      console.error(`Iframe with id '${id}' not found.`);
    }
  }

  // Load header and footer into iframes
  loadFrame("header-frame", "/src/components/header/header.html");
  loadFrame("footer-frame", "/src/components/footer/footer.html");

  const iframe = document.getElementById("header-frame");
  iframe.onload = function () {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) {
      console.error("Unable to access iframe content! Check for cross-origin restrictions.");
      return;
    }
    console.log("Header iframe loaded. Searching for nav links...");

    const navLinks = iframeDocument.querySelectorAll(".nav-link");
    if (navLinks.length === 0) {
      console.warn("No nav links found in header iframe! Is header.html loaded correctly?");
    }
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const page = e.target.getAttribute("data-page");
        console.log(`Loading page: ${page}`);
        loadContent(page);
      });
    });
  };
});
