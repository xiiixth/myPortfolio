function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let lastScrollTop = 0;

function scrollAnimations() {
  const sections = document.querySelectorAll('.animated-section');
  const darkModeIcon = document.getElementById('dark-mode-icon');

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight / 1.3) {
      section.classList.add('fade-in');
    } else {
      section.classList.remove('fade-in');
    }
  });

  // Control dark mode icon visibility based on scroll position
  const firstSectionTop = sections[0].getBoundingClientRect().top;
  const iconThreshold = 100; 

  if (firstSectionTop > iconThreshold) {
    darkModeIcon.style.opacity = '0'; 
  } else {
    darkModeIcon.style.opacity = '1'; 
  }
}

function detectScrollDirection() {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    scrollAnimations();
  } else {
    scrollAnimations();
  }

  lastScrollTop = st <= 0 ? 0 : st;
}

window.addEventListener('scroll', detectScrollDirection);

const profileSection = document.getElementById('profile');
profileSection.classList.add('fade-in');

document.addEventListener('DOMContentLoaded', function() {
  const profileSection = document.getElementById('profile');
  profileSection.classList.add('fade-in');

  const spans = document.querySelectorAll('.title span');

  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.opacity = '1';
    }, 100 * index); 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    toggleIconImages();
  }
});

function toggleDarkMode() {
  const body = document.body;
  const darkModeIcon = document.getElementById('dark-mode-icon');
  
  // Toggle dark mode class on body
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", JSON.stringify(body.classList.contains("dark-mode")));


  const iconImage = darkModeIcon.querySelector('img');
  if (body.classList.contains("dark-mode")) {
    
    iconImage.src = "./assets/sun.png"; 
  } else {
    
    iconImage.src = "./assets/moon.png";
  }

  toggleIconImages(body.classList.contains("dark-mode"));
}


function toggleIconImages(isDarkMode) {
  const arrowIcons = document.querySelectorAll('.arrow');

  arrowIcons.forEach(icon => {
    const lightSrc = icon.getAttribute('src');
    const darkSrc = icon.getAttribute('data-dark-src');
    icon.setAttribute('src', isDarkMode ? darkSrc : lightSrc);
  });
}

function toggleIconImages() {
  const iconsLightMode = document.querySelectorAll('.icon.light-mode');
  const iconsDarkMode = document.querySelectorAll('.icon.dark-mode');
  
  iconsLightMode.forEach(icon => icon.style.display = document.body.classList.contains('dark-mode') ? 'none' : 'inline');
  iconsDarkMode.forEach(icon => icon.style.display = document.body.classList.contains('dark-mode') ? 'inline' : 'none');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const textElement = document.querySelector('.typing-text__content');

function animateText() {
  textElement.style.animation = 'none';
  textElement.offsetHeight; 
  textElement.style.animation = 'typing 1s steps(20, end), blink-caret 0.5s step-end infinite';

  setTimeout(() => {
    textElement.textContent = 'Xeth Watin'; 
  }, 2000);
}

function startTypingLoop() {
  setInterval(animateText, 6000); 
  animateText(); 
}

document.addEventListener('DOMContentLoaded', startTypingLoop);

/* Loading Screen */
window.addEventListener('load', function () {
  // Hide the loading screen after some time (e.g., 2 seconds)
  setTimeout(function () {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('hidden');
  }, 2000); // Adjust the delay as needed
});
