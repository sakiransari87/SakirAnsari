document.getElementById("theme-toggle").addEventListener("change", function () {
  const hero = document.querySelector(".hero-section");
  const projects = document.getElementById("projects");

  if (this.checked) {
    hero.style.backgroundColor = "#f0f0f0";
    hero.style.color = "#111";
    projects.style.backgroundColor = "#f9f9f9";
    projects.style.color = "#111";
  } else {
    hero.style.backgroundColor = "#000";
    hero.style.color = "#fff";
    projects.style.backgroundColor = "#0a0a0a";
    projects.style.color = "#fff";
  }
});



  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent normal form submission

    const form = e.target;
    const formData = new FormData(form);
    const status = document.getElementById("form-status");

    status.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        let result = await response.json();

        if (result.success) {
          status.innerHTML = "<span style='color: green;'>Message sent successfully!</span>";
          form.reset();
        } else {
          status.innerHTML = "<span style='color: red;'>Something went wrong. Try again.</span>";
        }
      })
      .catch((error) => {
        console.error(error);
        status.innerHTML = "<span style='color: red;'>Error sending message.</span>";
      });
  });



  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

