// document.addEventListener("DOMContentLoaded", function () {

//   // Function to dynamically load components (header, footer, content)
//   function loadComponent(id, filePath) {
//     fetch(filePath)
//       .then((response) => response.text())
//       .then((data) => {
        
//         document.getElementById(id).innerHTML = data;

//         // If header loads, attach event listeners for navigation links
//         if (id === "header-placeholder") {
//           attachNavListeners();
//         }
//       })
//       .catch((error) => console.error(`Error loading ${filePath}:`, error));
//   }

//   //function to attach navigation listners
//   function attachNavListeners() {
//     const navLinks = document.querySelectorAll(
//       ".navbar-nav .nav-link, #menu-overlay .nav-link, #profile-link, .content-link"
//     );

//     navLinks.forEach((link) => {
//       link.addEventListener("click", function (event) {
//         event.preventDefault();

//         const page = link.getAttribute("data-page"); // Get the page name from the data attribute
//         const filePath = pagePaths[page];

//         if (filePath) {
//           loadComponent("content", filePath);
//         }
        

//         if (page === "profile") {
//           setTimeout( () => {
//             loadScript("/js/calendar.js", () => initializeCalendar());
//             loadScript("/js/profile.js", () => contactFormScroll());
//           }, 100);
//         } else if (page === "sitemap") {
//           setTimeout( () => {
//             loadScript("/js/sitemap.js", () => cat());
//           }, 100);       
//         }
//       });      
//     });
//   }

//   const pagePaths = {
//     "home": "/src/pages/home/home.html",
//     "statistics": "/src/pages/statistics/statistics.html",
//     "feedback": "/src/pages/feedback/feedback.html",
//     "ourteam": "/src/pages/ourteam/ourteam.html",
//     "sitemap": "/src/pages/sitemap/sitemap.html",
//     "volunteer": "/src/pages/volunteer/volunteer.html",
//     "profile": "/src/pages/profile/profile.html",

//     // Content Pages
//     "student1": "/src/pages/student1/oceanPollution.html",
//     "student2": "/src/pages/student2/marineLife.html",
//     "student3": "/src/pages/student3/coralReefProtection.html",
//     "student4": "/src/pages/student4/sustainableFishing.html"
//   };
  

//   function loadScript(src, callback) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = callback;
//     document.body.appendChild(script);
//   }
  

//   // Handle browser back/forward button navigation
//   window.addEventListener("popstate", function () {
//     loadComponent("content", window.location.pathname);
//   });

//   // Load Header and Footer once
//   loadComponent("header-placeholder", "/src/components/header/header.html");
//   //Footer component
//   //loadComponent("header-placeholder", "/src/components/header/header.html");

//   loadComponent("content","/src/pages/splashscreen/splashscreen.html");

//   setTimeout(() => {
//     loadComponent("content", "/src/pages/home/home.html");
//   }, 5000); // 4 seconds delay
// });


document.addEventListener("DOMContentLoaded", function () {
  // Function to update iframe src
  function loadPage(page) {
    const filePath = pagePaths[page];
    if (filePath) {
      document.getElementById("content-frame").src = filePath;
    }
  }

  // Function to attach event listeners to navigation links
  function attachNavListeners() {
    const navLinks = document.querySelectorAll(
      ".navbar-nav .nav-link, #menu-overlay .nav-link, #profile-link, .content-link"
    );

    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const page = link.getAttribute("data-page");
        loadPage(page);
      });
    });
  }

  const pagePaths = {
    "home": "/src/pages/home/home.html",
    "statistics": "/src/pages/statistics/statistics.html",
    "feedback": "/src/pages/feedback/feedback.html",
    "ourteam": "/src/pages/ourteam/ourteam.html",
    "sitemap": "/src/pages/sitemap/sitemap.html",
    "volunteer": "/src/pages/volunteer/volunteer.html",
    "profile": "/src/pages/profile/profile.html",

    // Content Pages
    "student1": "/src/pages/student1/oceanPollution.html",
    "student2": "/src/pages/student2/marineLife.html",
    "student3": "/src/pages/student3/coralReefProtection.html",
    "student4": "/src/pages/student4/sustainableFishing.html"
  };

  // Handle browser back/forward button navigation
  window.addEventListener("popstate", function () {
    loadPage(window.location.pathname);
  });

  // Load Header and Footer
  fetch("/src/components/header/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
      attachNavListeners();
    });

  fetch("/src/components/footer/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

  // Initially load the splash screen, then home page after 5 seconds
  setTimeout(() => {
    loadPage("home");
  }, 5000);
});
