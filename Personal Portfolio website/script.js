// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll Animation for Skill Progress Bars
window.addEventListener('scroll', () => {
  const skillSection = document.querySelector('.skills-section');
  const skills = document.querySelectorAll('.progress');

  if (skillSection.getBoundingClientRect().top < window.innerHeight) {
    skills.forEach(skill => {
      const value = skill.getAttribute('data-value');
      skill.style.width = `${value}%`;
    });
  }
});

// Toggle Dark Mode
const darkModeToggle = document.querySelector('.toggle-theme');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Typewriting Animation for Hero Text
const textElement = document.querySelector('.typing-text');
const textArray = ['Web Developer', 'Full Stack Enthusiast', 'Tech Lover'];
let textIndex = 0;
let charIndex = 0;

function typewrite() {
  if (charIndex < textArray[textIndex].length) {
    textElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typewrite, 150);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typewrite, 500);
  }
}

document.addEventListener('DOMContentLoaded', typewrite);
