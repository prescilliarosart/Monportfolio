import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface NavLink {
  name: string;
  href: string;
}

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();
  console.log("isDarkMode", isDarkMode);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navlinks: NavLink[] = [
    { name: "ACCUEIL", href: "#home" },
    { name: "A PROPOS", href: "#about" },
    { name: "PROJETS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navlinks.map((link) => link.href.substring(1));

      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
    
    if (isBottom) {
       // Si on est en bas, active la dernière section (contact)
      setActiveSection('contact');
      return;
    }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Vérifie si la section est visible dans le viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-white/80 backdrop-blur-md border-b border-gray-800 dark:border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-8">
            {navlinks.map((link: NavLink, index: number) => {
              const isActive = activeSection === link.href.substring(1);

              return (
                <a
                  key={index}
                  href={link.href}
                  className={`transition-colors duration-300 text-sm font-medium relative group py-2 ${
                    isActive
                      ? "text-white dark:text-black"
                      : "text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black"
                  }`}
                >
                  {link.name}
                  {/* Ligne de soulignement - toujours visible si section active */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Dark/Light Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-400 dark:text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
