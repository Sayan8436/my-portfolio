import { useEffect } from "react";

export default function Experience() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const line = document.querySelector(".tree-line");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "-translate-x-16",
              "translate-x-16",
              "translate-y-8",
              "scale-y-0"
            );
            entry.target.classList.add(
              "opacity-100",
              "translate-x-0",
              "translate-y-0",
              "scale-y-100"
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    if (line) observer.observe(line);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 bg-[#141414]">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-purple-500 mb-16
                       opacity-0 translate-y-8 transition-all duration-700 reveal">
          Experience
        </h2>

        <div className="relative">

          {/* 🌳 TREE LINE (GLOW + GROW) */}
          <div
            className="
              absolute left-1/2 top-0 w-[3px] h-full
              bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600
              shadow-[0_0_20px_rgba(168,85,247,0.8)]
              -translate-x-1/2 origin-top
              scale-y-0 transition-transform duration-1000 ease-out
              tree-line
            "
          ></div>

          {/* ITEM 1 – LEFT */}
          <div
            className="relative mb-20 flex justify-start w-1/2 pr-10
                       opacity-0 -translate-x-16 transition-all duration-700 reveal"
          >
            {/* NODE */}
            <div className="absolute right-[-9px] top-6 w-5 h-5 rounded-full
                            bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)]"></div>

            <div className="bg-black/40 border border-white/10 p-6 rounded-xl
                            shadow-lg hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold text-white">
                Full Stack Developer — Personal Projects
              </h3>
              <span className="text-sm text-gray-400 block mb-3">
                2024 – Present
              </span>

              <p className="text-gray-400">
                Built real-world full-stack applications while learning modern
                technologies and best practices.
              </p>

              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-1">
                <li>React, Node.js, Express & MongoDB</li>
                <li>Responsive UI with Tailwind CSS</li>
                <li>REST API integration</li>
                <li>Deployed on Vercel</li>
              </ul>
            </div>
          </div>

          {/* ITEM 2 – RIGHT */}
          <div
            className="relative mb-20 flex justify-end w-1/2 ml-auto pl-10
                       opacity-0 translate-x-16 transition-all duration-700 reveal"
          >
            {/* NODE */}
            <div className="absolute left-[-9px] top-6 w-5 h-5 rounded-full
                            bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)]"></div>

            <div className="bg-black/40 border border-white/10 p-6 rounded-xl
                            shadow-lg hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold text-white">
                Web Developer — Sabuj Sangha (Club Website)
              </h3>
              <span className="text-sm text-gray-400 block mb-3">
                2024
              </span>

              <p className="text-gray-400">
                Developed an official website for the club
                <span className="text-purple-400 font-medium"> Sabuj Sangha</span>,
                helping showcase events and activities.
              </p>

              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-1">
                <li>Designed modern, responsive layout</li>
                <li>Worked with club members for requirements</li>
                <li>Improved UX and accessibility</li>
                <li>Website deployment & maintenance</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
