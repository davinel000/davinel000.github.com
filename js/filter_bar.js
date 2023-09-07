document.addEventListener("DOMContentLoaded", function() {
  let activeFilters = {
    categories: [],
    tags: [],
    years: []
  };

  document.querySelectorAll('.filter-option').forEach((option) => {
    option.addEventListener('click', () => {
      option.classList.toggle('active');

      const type = option.getAttribute('data-type'); // Assuming you have a data-type attribute to differentiate between categories, tags, and years
      const value = option.getAttribute('data-value'); // Assuming you have a data-value attribute that contains the value of the filter

      if (option.classList.contains('active')) {
        console.log("Type:", type, "Value:", value);
        activeFilters[type].push(value);
      } else {
        const index = activeFilters[type].indexOf(value);
        if (index > -1) {
          activeFilters[type].splice(index, 1);
        }
      }

      console.log("Active Filters:", activeFilters);
      applyFilters();
    });
  });

  function applyFilters() {
    const projects = Array.from(document.querySelectorAll('.project-row'));

    console.log("Active filters at the time of apply:", activeFilters);
    console.log("Projects:", projects);
    
    projects.forEach((project, index) => {
      const projectCategory = project.getAttribute('data-category');
      const projectTags = project.getAttribute('data-tags').split(',');
      const projectYear = project.getAttribute('data-year');
      
      // Log each project's data for debugging
      console.log(`Project ${index} - Category: ${projectCategory}, Tags: ${projectTags.join(', ')}, Year: ${projectYear}`);
  
      let show = true;
  
      if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(projectCategory)) show = false;
      if (activeFilters.tags.length > 0 && !activeFilters.tags.some(tag => projectTags.includes(tag))) show = false;
      if (activeFilters.years.length > 0 && !activeFilters.years.includes(projectYear)) show = false;
  
      // Log whether or not this project will be shown
      console.log(`Will Project ${index} be shown? ${show}`);
      
      project.style.display = show ? 'flex' : 'none';
    });
  }
});
