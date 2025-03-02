document.addEventListener("DOMContentLoaded", function () {
    // Load Header and Footer on all pages
    loadComponent("header-placeholder", "/src/components/header/header.html");
  
    // Show Splash Screen first, then load Home Page
    loadComponent("content", "/src/pages/SplashScreen/splashscreen.html", function () {
      setTimeout(() => {
        loadComponent("content", "/src/pages/home/home.html");
      }, 5000);
    });
  
    attachNavListeners(); // Attach event listeners after loading content
  });
  
  // Function to load HTML components dynamically
  function loadComponent(targetId, url, callback) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById(targetId).innerHTML = html;
        executeScripts(targetId); // Ensure scripts inside dynamically loaded HTML execute
        if (callback) callback();
      })
      .catch(error => console.error(`Error loading ${url}:`, error));
  }
  
  // Function to execute scripts within dynamically loaded content
  function executeScripts(targetId) {
    const scripts = document.getElementById(targetId).querySelectorAll("script");
    scripts.forEach(script => {
      const newScript = document.createElement("script");
      if (script.src) {
        newScript.src = script.src;
      } else {
        newScript.textContent = script.textContent;
      }
      document.body.appendChild(newScript);
      script.remove();
    });
  }
  
  // Function to attach navigation listeners
  function attachNavListeners() {
    document.body.addEventListener("click", function (event) {
      const link = event.target.closest(".nav-link");
      if (link) {
        event.preventDefault();
        const page = link.getAttribute("href");
  
        // Load content dynamically without removing the header/footer
        loadComponent("content", page, function () {
          if (page.includes("profile.html")) {
            initializeCalendar();
          }
        });
  
        // Update browser history
        window.history.pushState({}, "", page);
      }
    });
  }
  
  // Handle browser back/forward button navigation
  window.addEventListener("popstate", function () {
    loadComponent("content", window.location.pathname);
  });
  
  // // Function to initialize the calendar
  // function initializeCalendar() {
  //   const calendar = document.getElementById("calendar");
  //   const selectedDateText = document.getElementById("selected-date");
  //   const eventDetails = document.getElementById("event-details");
  
  //   if (!calendar || !selectedDateText || !eventDetails) {
  //     console.warn("Calendar elements not found. Skipping calendar initialization.");
  //     return;
  //   }
  
  //   const events = {
  //     "2025-02-25": ["Event 1: 10:00 AM - 11:00 AM", "Event 2: 3:00 PM - 4:00 PM"],
  //     "2025-02-26": ["Workshop: 2:00 PM - 5:00 PM"],
  //     "2025-02-26": ["Workshop: 2:00 PM - 5:00 PM"],
  //     "2025-02-26": ["Workshop: 2:00 PM - 5:00 PM"],
  //     "2025-02-26": ["Workshop: 2:00 PM - 5:00 PM"],
  //   };
  
  //   calendar.innerHTML = "";
  
  //   for (let i = 1; i <= 30; i++) {
  //     const dateButton = document.createElement("button");
  //     dateButton.textContent = `Feb ${i}`;
  //     dateButton.classList.add("calendar-date");
  //     dateButton.dataset.date = `2025-02-${String(i).padStart(2, "0")}`;
  
  //     dateButton.addEventListener("click", function () {
  //       const selectedDate = this.dataset.date;
  //       selectedDateText.textContent = selectedDate;
  //       eventDetails.innerHTML = "";
  
  //       if (events[selectedDate]) {
  //         events[selectedDate].forEach(event => {
  //           const eventItem = document.createElement("li");
  //           eventItem.textContent = event;
  //           eventDetails.appendChild(eventItem);
  //         });
  //       } else {
  //         eventDetails.innerHTML = "<li>No events</li>";
  //       }
  //     });
  
  //     calendar.appendChild(dateButton);
  //   }
  // }
  
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
      "2025-02-25": ["Event 1: 10:00 AM - 11:00 AM", "Event 2: 3:00 PM - 4:00 PM"],
      "2025-03-15": ["Conference: 9:00 AM - 4:00 PM"],
      "2025-04-10": ["Workshop: 2:00 PM - 5:00 PM"],
    };
  
    function renderCalendar() {
      calendar.innerHTML = "";
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth();
      monthYearText.textContent = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
  
      let firstDay = new Date(year, month, 1).getDay();
      let daysInMonth = new Date(year, month + 1, 0).getDate();
  
      for (let i = 0; i < firstDay; i++) {
        let emptyCell = document.createElement("div");
        emptyCell.classList.add("empty-cell");
        calendar.appendChild(emptyCell);
      }
  
      for (let i = 1; i <= daysInMonth; i++) {
        const dateButton = document.createElement("button");
        dateButton.textContent = i;
        dateButton.classList.add("calendar-date");
        let dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
        dateButton.dataset.date = dateKey;
        
        dateButton.addEventListener("click", function () {
          selectedDateText.textContent = dateKey;
          eventDetails.innerHTML = "";
  
          if (events[dateKey]) {
            events[dateKey].forEach(event => {
              const eventItem = document.createElement("li");
              eventItem.textContent = event;
              eventDetails.appendChild(eventItem);
            });
          } else {
            eventDetails.innerHTML = "<li>No events</li>";
          }
        });
        calendar.appendChild(dateButton);
      }
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
  