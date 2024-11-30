document.addEventListener("DOMContentLoaded", function() {
    const skills = [
      "creating web applications",
      "working with databases",
      "developing RESTful APIs",
      "Django ORM",
      "user authentication",
      "template rendering",
      "deployment with Django"
    ];
    const skillsContainer = document.getElementById("skills");
    
    skills.forEach((skill, index) => {
      const span = document.createElement("span");
      span.textContent = skill;
      span.style.animationDelay = `${index * 3}s`;
      skillsContainer.appendChild(span);
    });
  });

  