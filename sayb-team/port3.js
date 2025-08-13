document.addEventListener('DOMContentLoaded', () => {
    let hasAnimated = false;

    function animateProgress() {
        const circles = document.querySelectorAll('.circle-progress');
        const skillPercentages = document.querySelectorAll('.skill-percentage');
        const progressBars = document.querySelectorAll('.progress');

        circles.forEach(circle => {
            const targetPercentage = parseInt(circle.getAttribute('data-percentage'), 10);
            const textElement = circle.querySelector('.circle-text');
            let currentPercentage = 0;

            function updateCircle() {
                if (currentPercentage < targetPercentage) {
                    currentPercentage++;
                    textElement.textContent = currentPercentage + '%';
                    circle.style.background = `conic-gradient(#00ffff 0% ${currentPercentage}%, #333 ${currentPercentage}% 100%)`;
                    setTimeout(updateCircle, 20); // Increased timeout for slower animation
                }
            }
            updateCircle();
        });

        skillPercentages.forEach((span, index) => {
            const targetPercentage = parseInt(span.getAttribute('data-percentage'), 10);
            const progressBar = progressBars[index];
            let currentPercentage = 0;

            function updateProgressBar() {
                if (currentPercentage < targetPercentage) {
                    currentPercentage++;
                    span.textContent = currentPercentage + '%';
                    progressBar.style.width = currentPercentage + '%';
                    setTimeout(updateProgressBar, 30); // Increased timeout for slower animation
                }
            }
            updateProgressBar();
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        const skillsContainer = document.querySelector('.skills-container');
        if (isElementInViewport(skillsContainer)) {
            if (!hasAnimated) {
                skillsContainer.classList.add('visible');
                animateProgress();
                hasAnimated = true; // Prevent further animations until reset
            }
        } else {
            skillsContainer.classList.remove('visible');
            hasAnimated = false; // Allow animations again when section is hidden
        }
    }

    // Add event listeners for scroll and resize events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check in case the section is already in view
    handleScroll();
});



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




(function() {
    const phrases = [
        "Creative & Tech Team",
        "Web Developers",
        "Graphic Designers",
        "Mobile App Creators",
        "Innovators",
        "Problem Solvers"
    ];

    let phraseIndex = 0;
    const textElement = document.getElementById("dynamic-text");

    setInterval(() => {
        // Fade out
        textElement.style.opacity = 0;

        setTimeout(() => {
            // Change text after fade out
            phraseIndex = (phraseIndex + 1) % phrases.length;
            textElement.textContent = phrases[phraseIndex];

            // Fade in
            textElement.style.opacity = 1;
        }, 500); // matches transition time
    }, 2500); // change every 2 seconds
})();