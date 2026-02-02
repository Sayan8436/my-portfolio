export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold">
          Sayan<span className="text-purple-500">Dutta</span>
        </h1>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#home" className="hover:text-purple-400">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-purple-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

