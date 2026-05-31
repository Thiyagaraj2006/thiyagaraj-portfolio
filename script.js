const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
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
      "Developed a Student Management System using Python and MySQL for storing and managing student information.",
    link: "https://github.com/Thiyagaraj2006/Student-Management-System"
  },

  {
    title: "Gym Management System",
    tech: "Python • MySQL",
    description:
      "Built a Gym Management System to manage member details and records efficiently.",
    link: "https://github.com/Thiyagaraj2006/Gym-Management-System"
  },

  {
    title: "Todolist Pages",
    tech: "HTML • CSS",
    description:
      "A simple Todo List web page developed using HTML and basic CSS. This project includes task tables, checkboxes, radio buttons, and daily task tracking sections to help organize daily activities in a structured way",
    link: "https://github.com/Thiyagaraj2006/ToDolist"
  },

  {
    title: "College Store Management System",
    tech: "HTML • CSS",
    description:
      "Created a clean frontend interface for a college store management system.",
    link: "https://github.com/Thiyagaraj2006/College-Store-Management-System"
  },

  {
    title: "College Website with Multiple Pages",
    tech: "HTML • CSS",
    description:
      "Designed and developed a responsive multi-page college website.",
    link: "https://github.com/Thiyagaraj2006/College-Website-with-Multiple-Pages",
    website: "https://college-website-with-multiple-pages.vercel.app/"
  },

  {
    title: "Portfolio",
    tech: "HTML • CSS • Javascript",
    description:
      "Personal portfolio website showcasing my projects, skills, and web development journey.",
    link: "https://github.com/Thiyagaraj2006/thiyagaraj-portfolio",
    website: "https://thiyagaraj-portfolio.vercel.app/"
  },
  
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

  <div class="project-buttons">

    ${
      project.title === "College Website with Multiple Pages" ||
      project.title === "Portfolio"
        ? `

        <a
          href="${project.link}"
          target="_blank"
          rel="noreferrer"
        >
          View Project →
        </a>

         <a
          href="${project.website}"
          target="_blank"
          rel="noreferrer"
          class="visit-btn"
        >
          Visit Website
        </a>

      `
        : `
        <a
          href="${project.link}"
          target="_blank"
          rel="noreferrer"
        >
          View Project →
        </a>
      `
    }

  </div>
  `;

  projectsContainer.appendChild(projectCard);

});
