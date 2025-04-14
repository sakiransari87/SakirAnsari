
 
  
  document.querySelectorAll('.project-card').forEach(card => {
    const inner = card.querySelector('.project-inner');
  
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 20;
      const rotateX = ((y / rect.height) - 0.5) * -20;
  
      inner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
  
    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });


  document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('mousemove', e => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 15;
      const rotateX = ((y / rect.height) - 0.5) * -15;
  
      link.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
  
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });
  
 