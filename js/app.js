// document.addEventListener("DOMContentLoaded", function () {
//   loadPageBasedOnURL(window.location.pathname);

//   fetch("src/components/header/header.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("header-placeholder").innerHTML = data;

//       attachNavClickEventListeners();
//     })
//     .catch((error) => console.log("Error loading the component", error));

//   function loadPageBasedOnURL(path) {
//     const page = path.split("/")[1];
//     if (page === "about") {
//       loadAboutPage();
//     } else if (page === "statistics") {
//       loadStatisticsPage();
//     } else if (page === "feedback") {
//       loadFeedbackPage();
//     } else if (page === "ourTeam") {
//       laodOurTeamPage();
//     } else if (page === "sitemap") {
//       loadSitemapPage();
//     } else {
//       loadHomePage();
//     }
//   }

//   // Function to load the home page content into the content placeholder
//   function loadHomePage() {
//     fetch("/src/pages/Home/home.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("content").innerHTML = data;
//         setActiveNavLink("home-link");
//       })
//       .catch((error) => console.log("Error loading home page", error));
//   }

//   // Function to load the about page content into the content placeholder
//   function loadAboutPage() {
//     fetch("/src/pages/About/about.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("content").innerHTML = data;
//         setActiveNavLink("about-link");
//       })
//       .catch((error) => console.log("Error loading about page", error));
//   }

//   // Function to load the about page content into the content placeholder
//   function loadAboutPage() {
//     fetch("/src/pages/About/about.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("content").innerHTML = data;
//         setActiveNavLink("about-link");
//       })
//       .catch((error) => console.log("Error loading about page", error));
//   }

//   // Function to load the about page content into the content placeholder
//   function loadAboutPage() {
//     fetch("/src/pages/About/about.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("content").innerHTML = data;
//         setActiveNavLink("about-link");
//       })
//       .catch((error) => console.log("Error loading about page", error));
//   }

//   // Function to load the about page content into the content placeholder
//   function loadAboutPage() {
//     fetch("/src/pages/About/about.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("content").innerHTML = data;
//         setActiveNavLink("about-link");
//       })
//       .catch((error) => console.log("Error loading about page", error));
//   }

//   // Function to attach event listeners to the navigation links
//   function attachNavClickEventListeners() {
//     const navLinks = document.querySelectorAll(".nav-link");

//     navLinks.forEach((link) => {
//       link.addEventListener("click", function (event) {
//         event.preventDefault();

//         navLinks.forEach((item) => item.classList.remove("active"));

//         this.classList.add("active");

//         //const page = this.getAttribute("href").substring(1);
//         if (this.id === "home-link") {
//           loadHomePage();
//           window.history.pushState({}, "", "home");
//         } else if (this.id === "about-link") {
//           loadAboutPage();
//           window.history.pushState({}, "", "about");
//         } else if (this.id === "statistics-link") {
//           loadStatisticsPage();
//           window.history.pushState({}, "", "statistics");
//         } else if (this.id === "feedback-link") {
//           loadFeedbackPage();
//           window.history.pushState({}, "", "feedback");
//         }
//       });
//     });
//   }

//   function setActiveNavLink(linkId) {
//     const navLinks = document.querySelectorAll(".nav-link");
//     navLinks.forEach((link) => link.classList.remove("active"));
//     document.getElementById(linkId).classList.add("active");
//   }

//   window.addEventListener("popstate", function () {
//     loadPageBasedOnURL(window.location.pathname);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   loadPageBasedOnURL(window.location.pathname);

//   fetch("src/components/header/header.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("header-placeholder").innerHTML = data;
//       attachNavClickEventListeners();
//     })
//     .catch((error) => console.log("Error loading the component", error));

//   function loadPageBasedOnURL(path) {
//     const page = path.split("/").pop(); // Get the last part of the path
//     if (page === "about") {
//       loadPages("src/pages/about/about.html", "about-link");
//     } else if (page === "statistics") {
//       loadPages("src/pages/statistics/statistics.html", "statistics-link");
//     } else if (page === "feedback") {
//       loadPages("src/pages/feedback/feedback.html", "feedback-link");
//     } else if (page === "ourteam") {
//       loadPages("src/pages/ourteam/ourteam.html", "ourteam-link");
//     } else if (page === "sitemap") {
//       loadPages("src/pages/sitemap/sitemap.html", "sitemap-link");
//     } else if (page === "volunteer") {
//       loadPages("src/pages/volunteer/volunteer.html", "volunteer-link");
//     } else if (page === "home" || page === "") {
//       loadPages("src/pages/Home/home.html", "home-link");
//     } else {
//       // If the page doesn't exist, load the error page
//       loadPages("src/pages/Error/error.html", null);
//     }
//   }

//   function loadPages(path, activeLink) {
//     fetch(path)
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("content").innerHTML = data;
//         setActiveNavLink(activeLink);
//       })
//       .catch((error) => console.log("Error loading page", error));
//   }

//   function attachNavClickEventListeners() {
//     const navLinks = document.querySelectorAll(".nav-link");

//     navLinks.forEach((link) => {
//       link.addEventListener("click", function (event) {
//         event.preventDefault();

//         navLinks.forEach((item) => item.classList.remove("active"));

//         this.classList.add("active");

//         const page = this.getAttribute("href").substring(1);
//         if (page === "home") {
//           loadPages("src/pages/home/home.html", "home-link");
//           window.history.pushState({}, "", "/home");
//         } else if (page === "about") {
//           loadPages("src/pages/about/about.html", "about-link");
//           window.history.pushState({}, "", "/about");
//         } else if (page === "statistics") {
//           loadPages("src/pages/statistics/statistics.html", "statistics-link");
//           window.history.pushState({}, "", "/statistics");
//         } else if (page === "feedback") {
//           loadPages("src/pages/feedback/feedback.html", "feedback-link");
//           window.history.pushState({}, "", "/feedback");
//         } else if (page === "ourteam") {
//           loadPages("src/pages/ourteam/ourteam.html", "ourteam-link");
//           window.history.pushState({}, "", "/ourteam");
//         } else if (page === "sitemap") {
//           loadPages("src/pages/sitemap/sitemap.html", "sitemap-link");
//           window.history.pushState({}, "", "/sitemap");
//         } else if (page === "volunteer") {
//           loadPages("src/pages/volunteer/volunteer.html", "volunteer-link");
//           window.history.pushState({}, "", "/volunteer");
//         } else {
//           // Load the error page for unknown links
//           loadPages("src/pages/Error/error.html", null);
//           window.history.pushState({}, "", "/error");
//         }
//       });
//     });
//   }

//   function setActiveNavLink(linkId) {
//     const navLinks = document.querySelectorAll(".nav-link");
//     navLinks.forEach((link) => link.classList.remove("active"));
//     document.getElementById(linkId).classList.add("active");
//   }

//   window.addEventListener("popstate", function () {
//     loadPageBasedOnURL(window.location.pathname);
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  // Function to dynamically load components (header, footer, content)
  function loadComponent(id, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;

        // If header loads, attach event listeners for navigation links
        if (id === "header-placeholder") {
          attachNavListeners();
        }
      })
      .catch(error => console.error(`Error loading ${filePath}:`, error));
  }

  //function to attach navigation listners
  function attachNavListeners() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, #menu-overlay .nav-link");

    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const page = link.getAttribute("href");

        loadComponent("content", `/src/pages/${page}${page}.html`);
        window.history.pushState({}, "", page);
      });
    });
  }

  // Handle browser back/forward button navigation
  window.addEventListener("popstate", function () {
    loadComponent("content", window.location.pathname);
  });


  // Load Header and Footer once
  loadComponent("header-placeholder", "/src/components/header/header.html");


  // Default content page (Home)
  const initialPage = window.location.pathname === "/" ? "/src/pages/home/home.html" : window.location.pathname;
  loadComponent("content", initialPage);

})
