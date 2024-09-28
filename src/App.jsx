import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';


const NeonPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Sohom Banerjee
              </h1>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink href="#about">About</NavLink>
                  <NavLink href="#experience">Experience</NavLink>
                  <NavLink href="#skills">Skills</NavLink>
                  <NavLink href="#contact">Contact</NavLink>
                  <NavLink href="#education">Education</NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Other icons or buttons can be added here */}
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink href="#about" onClick={toggleMenu}>About</NavLink>
              <NavLink href="#experience" onClick={toggleMenu}>Experience</NavLink>
              <NavLink href="#skills" onClick={toggleMenu}>Skills</NavLink>
              <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
              <NavLink href="#education" onClick={toggleMenu}>Education</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <NavLink href="#about" onClick={toggleMenu}>About</NavLink>
          
          <NavLink href="#skills" onClick={toggleMenu}>Skills</NavLink>
          <NavLink href="#education" onClick={toggleMenu}>Education</NavLink>
          <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
        </div>
      )}

      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        
        <h1 className="text-5xl font-bold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Sohom Banerjee
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Dynamic intern with a passion for technology and problem-solving
        </p>
        
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300">
          <p className="mb-4">
            Known for my creative problem-solving skills, I thrive in fast-paced environments where no two days are the same. 
            With a passion for learning and a drive to contribute, I'm here to make an impact.
          </p>
          <p className="mb-4">
            I am a dynamic intern with a knack for problem-solving and an insatiable curiosity for technology. I bring a fresh perspective and a can-do attitude to every challenge.
          </p>
          <p>
            My unique strength is I learn new things fast and start applying them faster.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300">
          <p className="mb-4">
            I have experience working with various technologies, including  JavaScript, Python, React.js, Django, Node.js, MongoDB, and SQL. I have also worked on various projects using these technologies. I create applications using these technologies and have used them in various projects. At last I upload my projects on Github if my applications are bugfree. 
          </p>
        </div>
      </section>

      

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">
          Skills
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          
          
          
          <Skill name="C/C++" />
          

          <Skill name="JavaScript" />
          <Skill name="Java" />
          <Skill name="Python" />
          <Skill name="React.js" />
          <Skill name="Django" />
          <Skill name="Node.js" />
          <Skill name="MongoDB" />
          <Skill name="SQL" />
          <Skill name="Debugging" />
          <Skill name="Docker" />
        </div>
      </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
          Get in Touch
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-300">Kolkata, West Bengal</p>
          <p className="text-gray-300">Email: sohommister@gmail.com</p>
          
          <div className="flex justify-center space-x-6 mt-4">
            <SocialLink href="https://linkedin.com/in/sohom-banerjee-863775225" icon={<Linkedin />} />
            <SocialLink href="mailto:sohommister@gmail.com" icon={<Mail />} />
            <SocialLink href="https://github.com/Srap47" icon={<Github />} />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <EducationCard
            degree="Bachelor of Technology - BTech in Computer Science"
            institution="Techno India College Of Technology"
            
          />
          <EducationCard
            degree="Diploma in Aeronautical engineering"
            institution="Bhubaneswar Engineering College, (BEC), Bhubaneswar, Khordha"
            
            gpa="First Division"
          />
        </div>
      </section>



      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        <p>&copy; 2024 Sohom Banerjee. All rights reserved.</p>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block px-3 py-2 text-purple-300 hover:text-purple-100 transition duration-300"
  >
    {children}
  </a>
);

const EducationCard = ({ degree, institution, duration, gpa }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-neon-blue transition duration-300 mb-4">
    <h3 className="text-xl font-semibold mb-2 text-purple-300">{degree}</h3>
    <p className="text-gray-400">{institution}</p>
    <p className="text-gray-400">{duration}</p>
    {gpa && <p className="text-gray-400">GPA: {gpa}</p>}
  </div>
);

const Skill = ({ name }) => (
  <div className="bg-gray-800 p-3 rounded-lg text-center text-purple-300 hover:bg-gray-700 transition duration-300">
    {name}
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition duration-300"
  >
    {icon}
  </a>
);

export default NeonPortfolio;
