import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-extrabold mb-4">
            Hi, I'm <span className="text-purple-500">Sayan Dutta</span>
          </h1>

<h2 className="text-2xl font-semibold text-gray-300 mb-6 flex flex-wrap">
  <span className="mr-2">I am a</span>

  <span className="text-purple-400">
    <Typewriter
      options={{
        strings: [
          "UI/UX Designer |",
          "Frontend Developer |",
          "Full Stack Developer |",
          "Coder |",
        ],
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 50,
      }}
    />
  </span>
</h2>


          <p className="text-gray-400 max-w-lg mb-8">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-500 rounded-lg text-purple-400 hover:bg-purple-500 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center"
        >
         <img
  src="/profile.jpeg"
  alt="Sayan Dutta"
  className="w-72 h-72 rounded-full border-4 border-purple-500
             shadow-[0_0_60px_rgba(139,92,246,0.6)] object-cover"
/>

        </motion.div>

      </div>
    </section>
  );
}
