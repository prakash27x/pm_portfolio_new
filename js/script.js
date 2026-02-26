// Wait for DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Set copyright year dynamically
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  // Back to top button functionality
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Get the mobile menu button and navigation links
  const menuBtn = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav__links');
  
  // Toggle mobile menu when button is clicked
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking on a link (for better UX)
  const navItems = document.querySelectorAll('.nav__links li a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth < 769) {
        navLinks.classList.add('hidden');
      }
    });
  });
  
  // Close mobile menu when clicking outside of it
  document.addEventListener('click', function(event) {
    // Check if click is inside nav or on menu button
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnMenuBtn = menuBtn.contains(event.target);
    
    // If click is outside nav and menu button, and menu is open on mobile, close it
    if (!isClickInsideNav && !isClickOnMenuBtn && !navLinks.classList.contains('hidden') && window.innerWidth < 769) {
      navLinks.classList.add('hidden');
    }
  });
});

// Keep your existing projects fetch functionality
fetch('assets/json/projects.json')
  .then(response => response.json())
  .then(data => {
    const projectContainer = document.getElementById('project');
    
    // Clear any existing content
    projectContainer.innerHTML = '';

    // Loop through the data and create HTML elements for each project
    data.projects.forEach(project => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      
      slide.innerHTML = `
        <div class="card" style="width: 20rem;">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <a href="${project.link}" class="btn btn-primary" target="_blank"><i class="fa-brands fa-github"></i> View Code</a>
          </div>
        </div>
      `;
      
      // Append the slide to the project container
      projectContainer.appendChild(slide);
    });

    // Initialize Swiper after projects are loaded
    new Swiper('.project-carousel', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  })
  .catch(error => console.error('Error fetching projects:', error));