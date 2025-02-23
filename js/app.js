// document.addEventListener("DOMContentLoaded", function () {
//     fetch("/components/header.html") //Fetch the header.html file
//       .then((response) => response.text()) //Convert it to a text
//       .then((data) => {
//         document.getElementById("header-placeholder").innerHTML = data; //Insert into the placeholder

//         // Once the content is loaded, attach click event listeners
//         attachNavClickEventListeners();
//       })
//       .catch((error) => console.log("Error loading the component", error));

//     // Function to attach event listeners to the navigation links
//     function attachNavClickEventListeners() {
//       const navLinks = document.querySelectorAll(".nav-link");

//       navLinks.forEach(link => {
//         link.addEventListener("click", function () {
//           // Remove the 'active' class from all links
//           navLinks.forEach(item => item.classList.remove("active"));

//           // Add the 'active' class to the clicked link
//           this.classList.add("active");

//           // e.g., window.location.href = this.getAttribute("href");

//         });
//       });
//     }
//   });

document.addEventListener("DOMContentLoaded", function () {
  // Check for the current URL path and load the corresponding page
  loadPageBasedOnURL(window.location.pathname);

  // Load the header component into the header placeholder
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Attach event listeners for the navigation links
      attachNavClickEventListeners();
    })
    .catch((error) => console.log("Error loading the component", error));
    

  function loadPageBasedOnURL(path) {
    const page = path.split("/")[1]; // Get the page from the hash
    if (page === "about") {
      loadAboutPage();
    } else if (page === "statistics") {
      loadStatisticsPage();
    } else if (page === "feedback") {
      loadFeedbackPage();
    } else {
      loadHomePage(); // Default to Home page
    }
  }

  // Function to load the home page content into the content placeholder
  function loadHomePage() {
    fetch("/pages/Home/home.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
        setActiveNavLink("home-link");
      })
      .catch((error) => console.log("Error loading home page", error));
  }

  // Function to load the about page content into the content placeholder
  function loadAboutPage() {
    fetch("/pages/About/about.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
        setActiveNavLink("about-link");
      })
      .catch((error) => console.log("Error loading about page", error));
  }

  // Function to load other pages like statistics, feedback, etc.
  function loadStatisticsPage() {
    fetch("statistics.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
        setActiveNavLink("statistics-link");
      })
      .catch((error) => console.log("Error loading statistics page", error));
  }

  // Function to load feedback page content
  function loadFeedbackPage() {
    fetch("feedback.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
        setActiveNavLink("feedback-link");
      })
      .catch((error) => console.log("Error loading feedback page", error));
  }

  // Function to attach event listeners to the navigation links
  function attachNavClickEventListeners() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        // Prevent default link behavior (no page navigation)
        event.preventDefault();

        // Remove the 'active' class from all links
        navLinks.forEach((item) => item.classList.remove("active"));

        // Add the 'active' class to the clicked link
        this.classList.add("active");

        // Handle loading the content for the respective page
        const page = this.getAttribute("href").substring(1); // Get the page name from href
        if (page === "home") {
          loadHomePage();
          window.history.pushState({}, "", "home");
        } else if (page === "about") {
          loadAboutPage();
          window.history.pushState({}, "", "about");
        } else if (page === "statistics") {
          loadStatisticsPage();
          window.history.pushState({}, "", "statistics");
        } else if (page === "feedback") {
          loadFeedbackPage();
          window.history.pushState({}, "", "feedback");
        }
      });
    });
  }

  // Function to set the active class for the navigation link
  function setActiveNavLink(linkId) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => link.classList.remove("active"));
    document.getElementById(linkId).classList.add("active");
  }

  // Listen for browser back and forward button clicks
  window.addEventListener("popstate", function () {
    loadPageBasedOnURL(window.location.pathname);
  });
});
