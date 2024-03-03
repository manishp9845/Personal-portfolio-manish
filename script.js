const knowMoreBtn = document.getElementById('knowMoreBtn');

knowMoreBtn.addEventListener('click', () => {
  const aboutSection = document.getElementById('portfolio');

  // Scroll to the about section
  aboutSection.scrollIntoView({ 
    behavior: 'smooth' 
  });
});