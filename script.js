const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Python",
  "MySQL",
  "GitHub",
  "Responsive Web Design"
];

const projects = [
  {
    title: "Student Management System",
    tech: "Python • MySQL",
    description:
      "Developed a Student Management System using Python and MySQL for storing and managing student information."
  },

  {
    title: "Gym Management System",
    tech: "Python • MySQL",
    description:
      "Built a Gym Management System to manage member details and records efficiently."
  },

  {
    title: "College Website with Multiple Pages",
    tech: "HTML • CSS",
    description:
      "Designed and developed a responsive multi-page college website."
  },

  {
    title: "College Store Management System",
    tech: "HTML • CSS",
    description:
      "Created a clean frontend interface for a college store management system."
  }
];

/* Skills */

const skillsContainer = document.getElementById("skills-container");

skills.forEach((skill) => {

  const skillCard = document.createElement("div");

  skillCard.classList.add("skill-card");

  skillCard.innerHTML = `<h4>${skill}</h4>`;

  skillsContainer.appendChild(skillCard);

});

/* Projects */

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {

  const projectCard = document.createElement("div");

  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
  
    <h4>${project.title}</h4>

    <span class="project-tech">${project.tech}</span>

    <p>${project.description}</p>

    <a
      href="https://github.com/thiyagaraj-dev"
      target="_blank"
      rel="noreferrer"
    >
      View Project →
    </a>
  
  `;

  projectsContainer.appendChild(projectCard);

});