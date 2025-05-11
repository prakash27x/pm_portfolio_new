// Fetch the project data from the JSON file
fetch('/resources/json/projects.json')
  .then(response => response.json())
  .then(data => {
    const projectContainer = document.getElementById('project');
    
    // Clear any existing content
    projectContainer.innerHTML = '';

    // Loop through the data and create HTML elements for each project
    data.forEach(project => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.width = '20rem';
      
      card.innerHTML = `
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.link}" class="btn btn-primary">More</a>
        </div>
      `;
      
      // Append the card to the project container
      projectContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching projects:', error));
