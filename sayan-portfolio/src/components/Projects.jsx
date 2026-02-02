export default function Projects() {
  const projects = [
    {
      title: "Sabuj Sangha ",
      desc: "A full-featured online website where a person can participate in any competition of a club saraswati puja and can show everythings about them",
      image: "/projects/sabuj sangha.png",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS",],
      demo: "https://sabuj-sangha.vercel.app/",
      code: "https://github.com/Sayan8436/sabuj-sangha",
    },
    {
      title: "FASHIONLY E-Commerce  Website ",
      desc: "A full-featured online website where everyone can perches products and also have a admin panel",
      image: "/projects/E-Commerce.png",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS",],
      demo: "https://fashionly-ecommerce.vercel.app/",
      code: "https://github.com/Sayan8436/fashionly-ecommerce",
    },
     {
      title: "My Portfolio ",
      desc: "This is my own portfolio website all about me.",
      image: "/projects/portfolio.png",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCss",],
      demo: "https://my-portfolio-rho-lilac-49.vercel.app/",
      code: "https://github.com/Sayan8436/my-portfolio",
    },
    {
      title: "Task Management App",
      desc: "A productivity application where someone can add his task and also can updates them.",
      image: "/projects/task management.png",
      tech: ["React", "Express.js", "MongoDB", "Node.js", ],
      demo: "#",
      code: "https://github.com/Sayan8436/Fullstack-Task-manager",
    },
    {
      title: "Expense Tracker",
      desc: "A application where someone can track their expenses.",
      image: "/projects/expense tracker.png",
      tech: ["React ", "Node.js", "MongoDB", "Express.js"],
      demo:  "https://expense-tracker-frontend-t9fz.vercel.app/",
      code: "https://github.com/Sayan8436/Personal-Expense-Tracker",
    },
     {
      title: "Simple Calculator",
      desc: "This is a frontend project a simple calculator to calculate value .",
      image: "/projects/calculator.png",
      tech: ["Html", "Css", "JavaScript"],
      demo: "https://simple-calculator-smoky-omega.vercel.app/",
      code: "https://github.com/Sayan8436/simple-calculator",
    },
     {
      title: "Weather Check App",
      desc: "Can detect weather conditions.",
      image: "/projects/weather check.png",
      tech: ["Html", "Css", "JavaScript", "OpenWeather API"],
      demo: "https://weathercheck-lilac.vercel.app/",
      code: "https://github.com/Sayan8436/Weather_Check",
    },
     {
      title: "Age Calculator App",
      desc: "A mobile app for calculating  your proper age.",
      image: "/projects/age calculator.png",
      tech: ["Html", "Css", "JavaScript", ],
      demo: "https://age-calculator789.netlify.app/",
      code: "https://github.com/Sayan8436/Age-Calculator",
    },
  ];

  return (
    <section id="projects" className="py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400">
            Some of the projects I’ve worked on
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#151515] rounded-2xl overflow-hidden
                         border border-white/10
                         hover:-translate-y-3 transition-all duration-300
                         hover:shadow-[0_20px_40px_rgba(139,92,246,0.35)]"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4">
                  {project.desc}
                </p>

                {/* TECH CHIPS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full
                                 bg-black/50 border border-white/10
                                 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-lg
                               bg-purple-600 hover:bg-purple-700 transition"
                  >
                    View Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-lg
                               border border-purple-500 text-purple-400
                               hover:bg-purple-500 hover:text-black transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

