document.addEventListener("DOMContentLoaded", function () {
  // Function to dynamically load components (header, footer, content)
  function loadComponent(id, filePath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;

        //   // Reinitialize scripts if calendar is being loaded
        // if (filePath.includes("profile.html")) {
        //   setTimeout(() => {
        //     initializeCalendar();
        //   }, 100);
        // }

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

        const page = link.getAttribute("href");

        // loadComponent("content", `/src/pages/${page}${page}.html`);
        loadComponent("content", page);
        //window.history.pushState({}, "", page);

        // If profile page is clicked, initialize the calendar after a short delay
        if (link.id === "profile-link") {
          setTimeout(() => {
            initializeCalendar();
          }, 100);
        }
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
  // const initialPage = window.location.pathname === "/" ? "/src/pages/home/home.html" : window.location.pathname;
  loadComponent("content", "/src/pages/SplashScreen/splashscreen.html");

  setTimeout(() => {
    loadComponent("content", "/src/pages/home/home.html");
  }, 5000); // 4 seconds delay
});

// Function to initialize the calendar
function initializeCalendar() {
  const calendar = document.getElementById("calendar");
  const selectedDateText = document.getElementById("selected-date");
  const eventDetails = document.getElementById("event-details");
  const prevMonthBtn = document.getElementById("prev-month");
  const nextMonthBtn = document.getElementById("next-month");
  const monthYearText = document.getElementById("month-year");

  let currentDate = new Date();

  const events = {
    "2025-02-25": [
      "Workshop: 10:00 AM - 11:00 AM",
      "Workshop: 3:00 PM - 4:00 PM",
      "Conference: 3:00 PM - 4:00 PM",
    ],
    "2025-03-15": ["Conference: 9:00 AM - 4:00 PM"],
    "2025-04-10": ["Workshop: 2:00 PM - 5:00 PM"],

    "2025-03-10": [
      "Workshop: 10:00 AM - 11:00 AM",
      "Conference: 3:00 PM - 4:00 PM",
      "Meeting: 3:00 PM - 4:00 PM",
    ],

    "2025-03-20": [
      "Get Together: 10:00 AM - 11:00 AM",
      "Workshop: 3:00 PM - 4:00 PM",
      "Fun Activities: 3:00 PM - 4:00 PM",
    ],
  };

  function renderCalendar() {
    calendar.innerHTML = ""; // Clear existing content
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    monthYearText.textContent = currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    // Weekday names
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekRow = document.createElement("div");
    weekRow.classList.add("week-row");

    weekdays.forEach((day) => {
      const dayLabel = document.createElement("div");
      dayLabel.textContent = day;
      dayLabel.classList.add("weekday-label");
      weekRow.appendChild(dayLabel);
    });

    calendar.appendChild(weekRow); // Append weekdays row

    // Calendar grid container
    const datesGrid = document.createElement("div");
    datesGrid.classList.add("calendar-grid");

    // Empty cells for alignment
    for (let i = 0; i < firstDay; i++) {
      let emptyCell = document.createElement("div");
      emptyCell.classList.add("empty-cell");
      datesGrid.appendChild(emptyCell);
    }

    // Generate date buttons
    for (let i = 1; i <= daysInMonth; i++) {
      const dateButton = document.createElement("button");
      dateButton.textContent = i;
      dateButton.classList.add("calendar-date");
      let dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        i
      ).padStart(2, "0")}`;
      dateButton.dataset.date = dateKey;

      dateButton.addEventListener("click", function () {
        selectedDateText.textContent = dateKey;
        eventDetails.innerHTML = "";

        if (events[dateKey]) {
          events[dateKey].forEach((event) => {
            const eventItem = document.createElement("li");
            eventItem.textContent = event;
            eventDetails.appendChild(eventItem);
          });
        } else {
          eventDetails.innerHTML = "<li>No events</li>";
        }
      });

      datesGrid.appendChild(dateButton);
    }

    calendar.appendChild(datesGrid);
  }

  prevMonthBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonthBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
}
