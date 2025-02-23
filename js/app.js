document.addEventListener("DOMContentLoaded", function () {
  loadPageBasedOnURL(window.location.pathname);

  fetch("src/components/header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      attachNavClickEventListeners();
    })
    .catch((error) => console.log("Error loading the component", error));


  function loadPageBasedOnURL(path) {
    const page = path.split("/")[1];
    if (page === "about") {
      loadPages("src/pages/About/about.html","about-link");
    } else if (page === "statistics") {
      loadPages("src/pages/Statistics/statistics.html","statistics-link");
    } else if (page === "feedback") {
      loadPages("src/pages/Feedback/feedback.html","feedback-link");
    } else {
     loadPages("src/pages/Home/home.html","home-link")
    }
  }

  function loadPages(path,activeLink){
    fetch(path)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
        setActiveNavLink(activeLink);
      })
      .catch((error) => console.log("Error loading feedback page", error));
  }
  function attachNavClickEventListeners() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        navLinks.forEach((item) => item.classList.remove("active"));

        this.classList.add("active");

        const page = this.getAttribute("href").substring(1);
        if (page === "home") {
          loadPages("src/pages/Home/home.html","home-link")
          window.history.pushState({}, "", "home");
        } else if (page === "about") {
          loadPages("src/pages/About/about.html","about-link");
          window.history.pushState({}, "", "about");
        } else if (page === "statistics") {
          loadPages("src/pages/Statistics/statistics.html","statistics-link");
          window.history.pushState({}, "", "statistics");
        } else if (page === "feedback") {
          loadPages("src/pages/Feedback/feedback.html","feedback-link");
          window.history.pushState({}, "", "feedback");
        }
      });
    });
  }

  function setActiveNavLink(linkId) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => link.classList.remove("active"));
    document.getElementById(linkId).classList.add("active");
  }

  window.addEventListener("popstate", function () {
    loadPageBasedOnURL(window.location.pathname);
  });
});


