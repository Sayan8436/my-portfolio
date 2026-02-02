import {
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* FRONTEND */}
          <SkillCard
            icon={<FaReact />}
            title="Frontend Development"
            desc="Building responsive and interactive user interfaces with modern frameworks."
            techs={["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript"]}
          />

          {/* BACKEND */}
          <SkillCard
            icon={<FaServer />}
            title="Backend Development"
            desc="Creating robust server-side applications and RESTful APIs."
            techs={["Node.js", "Express"]}
          />

          {/* DATABASE */}
          <SkillCard
            icon={<FaDatabase />}
            title="Database Management"
            desc="Designing and optimizing databases for performance and scalability."
            techs={["MongoDB", "PostgreSQL", "MySQL"]}
          />

          {/* TOOLS */}
          <SkillCard
            icon={<FaTools />}
            title="Tools & Technologies"
            desc="Essential tools and technologies for modern web development."
            techs={["Git", "GitHub", "Figma", "Canva", "PowerPoint"]}
          />

        </div>
      </div>
    </section>
  );
}

/* REUSABLE CARD COMPONENT */
function SkillCard({ icon, title, desc, techs }) {
  return (
    <div
      className="bg-[#151515] border border-white/10 rounded-2xl p-6
                 hover:-translate-y-3 transition-all duration-300
                 hover:shadow-[0_20px_40px_rgba(139,92,246,0.35)]"
    >
      {/* ICON */}
      <div className="text-purple-500 text-3xl mb-4">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm leading-6 mb-5">
        {desc}
      </p>

      {/* TECH PILLS */}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
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
    </div>
  );
}

