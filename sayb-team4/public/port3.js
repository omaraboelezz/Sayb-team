// Team Slider
const members = document.querySelectorAll(".team-member");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showMember(i) {
  members.forEach((member, idx) => {
    member.classList.toggle("active", idx === i);
    dots[idx].classList.toggle("active", idx === i);
  });
  index = i;
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showMember(i);
  });
});

setInterval(() => {
  let next = (index + 1) % members.length;
  showMember(next);
}, 3000);

// Dynamic Changing Text
(function() {
  const phrases = [
    "Creative & Tech Team",
    "Web Developers",
    "Graphic Designers",
    "Mobile App Creators",
    "Innovators Team",
    "Problem Solvers"
  ];

  let phraseIndex = 0;
  const textElement = document.getElementById("dynamic-text");

  setInterval(() => {
    textElement.style.opacity = 0;

    setTimeout(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      textElement.textContent = phrases[phraseIndex];

      textElement.style.opacity = 1;
    }, 500); 
  }, 2500); 
})();

// Navbar Active Link
document.querySelectorAll('.navbar a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
// Responsive Menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navbar a");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
// Logo Scroll to Top
let logo = document.querySelector(".logo_header");

logo.addEventListener("click", () => {
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth" 
  });
});
