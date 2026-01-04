
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});



const hireBtn = document.getElementById("hireBtn");

if (hireBtn) {
  hireBtn.addEventListener("click", () => {
    document.getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  });
}


const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "mailto:sahupriyansh617@gmail.com";
  });
}



const resumeBtn = document.querySelector(".resume-btn");

if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
   
    console.log("Resume download clicked");
  });
}


const skills = document.querySelectorAll(".skills-grid span");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("skill-show");
    }
  });
}, { threshold: 0.3 });

skills.forEach(skill => skillObserver.observe(skill));
