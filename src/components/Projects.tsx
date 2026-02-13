import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/ProjectsData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load projects");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black  dark:from-white dark:via-gray-100 dark:to-white py-20 flex items-center justify-center">
        <div className="text-white dark:text-black text-2xl">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 flex items-center justify-center">
        <div className="text-red-400 text-2xl">{error}</div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-black  dark:from-white dark:via-gray-100 dark:to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white dark:text-black">
            My Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div key={project.id} className="group relative bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-2xl overflow-hidden hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 dark:from-white/80 dark:via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                      <FaGithub className="text-white dark:text-black text-2xl" />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                        <FaExternalLinkAlt className="text-white dark:text-black text-xl" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white dark:text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-700 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => {
                      return (
                        <span key={index} className="px-3 py-1 text-xs bg-purple-600/20 dark:bg-purple-100 text-purple-300 dark:text-purple-700 rounded-full border border-purple-600/30 dark:border-purple-300">
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 dark:text-gray-600 text-xl">No projects available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;