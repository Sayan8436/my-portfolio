import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group transform-style">
  <div className="absolute inset-0 rounded-2xl bg-purple-500 blur-2xl opacity-30 group-hover:opacity-60 transition"></div>

  <img
    src="/profile.jpeg"
    alt="Sayan Dutta"
    className="
      relative
      w-[420px]
      rounded-2xl
      shadow-2xl
      transition-transform duration-500 ease-out
      group-hover:rotate-y-12
      group-hover:-rotate-x-6
      group-hover:scale-105
    "
  />
</div>


        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-7 mb-4">
            I am Sayan Dutta, a passionate Full Stack Web Developer and a
            B.Tech 2nd year student. I specialize in building modern,
            responsive, and scalable web applications using current
            technologies.
          </p>

          <p className="text-gray-400 leading-7 mb-8">
            When I'm not coding, I enjoy exploring new technologies,
            contributing to projects, and continuously improving my skills.
            I believe in learning by building real-world applications.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-black/40 border border-white/10 p-6 rounded-xl
                            hover:-translate-y-2 transition">
              <FaLightbulb className="text-purple-500 text-2xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Innovative</h3>
              <p className="text-gray-400 text-sm">
                I love creating unique solutions to complex problems using
                modern technologies.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 p-6 rounded-xl
                            hover:-translate-y-2 transition">
              <FaPaintBrush className="text-purple-500 text-2xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Design Oriented</h3>
              <p className="text-gray-400 text-sm">
                Clean UI and great user experience are at the heart of
                everything I build.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 p-6 rounded-xl
                            hover:-translate-y-2 transition sm:col-span-2">
              <FaCode className="text-purple-500 text-2xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400 text-sm">
                I focus on writing clean, maintainable, and scalable code
                following best practices.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



