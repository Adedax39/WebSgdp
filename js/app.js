document.addEventListener("DOMContentLoaded", function () {

  // Function to dynamically load components (header, footer, content)
  function loadComponent(id, filePath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        
        document.getElementById(id).innerHTML = data;

        // If header loads, attach event listeners for navigation links
        if (id === "header-placeholder") {
          attachNavListeners();
        }
      })
      .catch((error) => console.error(`Error loading ${filePath}:`, error));
  }

  //function to attach navigation listners
  function attachNavListeners() {
    const navLinks = document.querySelectorAll(
      ".navbar-nav .nav-link, #menu-overlay .nav-link, #profile-link"
    );

    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        const page = link.getAttribute("data-page"); // Get the page name from the data attribute
        const filePath = pagePaths[page];

        if (filePath) {
          loadComponent("content", filePath);
        }
        

        if (page === "profile") {
          setTimeout( () => {
            loadScript("/js/calendar.js", () => initializeCalendar());
            loadScript("/js/profile.js", () => contactFormScroll());
          }, 100);
        }
      });      
    });
  }

  const pagePaths = {
    "home": "/src/pages/home/home.html",
    "about": "/src/pages/about/about.html",
    "statistics": "/src/pages/statistics/statistics.html",
    "feedback": "/src/pages/feedback/feedback.html",
    "team": "/src/pages/team/team.html",
    "sitemap": "/src/pages/sitemap/sitemap.html",
    "volunteer": "/src/pages/volunteer/volunteer.html",
    "profile": "/src/pages/profile/profile.html"
  };
  

  function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.body.appendChild(script);
  }
  

  // Handle browser back/forward button navigation
  window.addEventListener("popstate", function () {
    loadComponent("content", window.location.pathname);
  });

  // Load Header and Footer once
  loadComponent("header-placeholder", "/src/components/header/header.html");
  //Footer component
  //loadComponent("header-placeholder", "/src/components/header/header.html");

  loadComponent("content","/src/pages/splashscreen/splashscreen.html");

  setTimeout(() => {
    loadComponent("content", "/src/pages/home/home.html");
  }, 5000); // 4 seconds delay
});
