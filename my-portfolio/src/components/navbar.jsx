export default function Navbar() {
    return (
      <nav className="w-full bg-gray-900 text-white p-4 fixed top-0 left-0 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo / Name */}
          <div className="text-xl font-bold">Charlotte</div>
  
          {/* Nav links */}
          <div>
            <ul className="flex space-x-8 list-none">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  