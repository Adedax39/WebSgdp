document.addEventListener("DOMContentLoaded", function () {
  // Function to load components (header, footer, content)
  function loadComponent(id, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;

        // After loading new content, re-attach event listeners to navigation links
        if (id === 'header') {
          attachNavListeners(); // Attach listeners to the navbar after header is loaded
        }
      })
      .catch(error => console.error(`Error loading ${filePath}:`, error));
  }

  // Function to handle navigation link clicks
  function attachNavListeners() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        const page = link.getAttribute('href');
        loadComponent("content", page);
      });
    });
  }

  // Load Header and Footer once
  loadComponent("header", "/src/layouts/main-layout/header/header.html");
  loadComponent("footer", "/src/layouts/main-layout/footer/footer.html");

  // Default content page (Home Page)
  loadComponent("content", "/src/pages/home/home.html");
});
