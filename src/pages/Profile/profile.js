// console.log("✅ profile.js is loaded successfully!");

// alert("profile.js is working!");

// document.addEventListener("DOMContentLoaded", function () {
//     const calendar = document.getElementById("calendar");
//     const selectedDateText = document.getElementById("selected-date");
//     const eventDetails = document.getElementById("event-details");
  
//     // Sample Events Data
//     const events = {
//       "2025-02-25": ["Event 1: 10:00 AM - 11:00 AM", "Event 2: 3:00 PM - 4:00 PM"],
//       "2025-02-26": ["Workshop: 2:00 PM - 5:00 PM"]
//     };
  
//     // Generate a simple calendar
//     for (let i = 1; i <= 30; i++) {
//       const dateButton = document.createElement("button");
//       dateButton.textContent = `Feb ${i}`;
//       dateButton.classList.add("calendar-date");
//       dateButton.dataset.date = `2025-02-${String(i).padStart(2, "0")}`;
  
//       dateButton.addEventListener("click", function () {
//         const selectedDate = this.dataset.date;
//         selectedDateText.textContent = selectedDate;
//         eventDetails.innerHTML = ""; // Clear previous events
  
//         if (events[selectedDate]) {
//           events[selectedDate].forEach(event => {
//             const eventItem = document.createElement("li");
//             eventItem.textContent = event;
//             eventDetails.appendChild(eventItem);
//           });
//         } else {
//           eventDetails.innerHTML = "<li>No events</li>";
//         }
//       });
  
//       calendar.appendChild(dateButton);
//     }
//   });
  
