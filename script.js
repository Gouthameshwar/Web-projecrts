// Get the elements
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const container = document.querySelector('.container');
const about = document.querySelector('.about');
const social = document.querySelector('.social');
const buttons = document.querySelector('.buttons');
const contactBtn = document.querySelector('.contact-btn');
const resumeBtn = document.querySelector('.resume-btn');

// Add event listeners
nav.addEventListener('mouseover', () => {
  nav.style.backgroundColor = '#444';
});

nav.addEventListener('mouseout', () => {
  nav.style.backgroundColor = '#333';
});

contactBtn.addEventListener('click', () => {
  alert('Contact button clicked!');
});

resumeBtn.addEventListener('click', () => {
  alert('Resume button clicked!');
});

// Add animation to social links
social.addEventListener('mouseover', (e) => {
  const target = e.target;
  if (target.tagName === 'A') {
    target.style.transform = 'scale(1.1)';
  }
});

social.addEventListener('mouseout', (e) => {
  const target = e.target;
  if (target.tagName === 'A') {
    target.style.transform = 'scale(1)';
  }
});

// Add animation to buttons
buttons.addEventListener('mouseover', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    target.style.transform = 'scale(1.1)';
  }
});

buttons.addEventListener('mouseout', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    target.style.transform = 'scale(1)';
  }
});