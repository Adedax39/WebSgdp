function contactFormScroll() {
    const contactBtn = document.querySelector(".btn-contact");
  
    if (contactBtn) {
      contactBtn.addEventListener("click", function (event) {
        event.preventDefault();
  
        //Find the contact form section
        const contactSection = document.querySelector("#contact-form-section");
  
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth"});
        }
      });
    }
  }