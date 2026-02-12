import { useState } from 'react';
import profileImage from '../assets/profile.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

interface TechSkill {
  name: string;
  icon: any;
}

interface SoftSkill {
  name: string;
}

function About() {
const techSkills: TechSkill[] = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Git', icon: FaGitAlt }
];

const softSkills: SoftSkill[] = [
  { name: 'Communication efficace' },
  { name: 'Esprit d\'équipe' },
  { name: 'Autonomie' },
  { name: 'Créativité' },
  { name: 'Résolution de problèmes' },
  { name: 'Adaptabilité' }
];

  const [activeTab, setActiveTab] = useState<'experience' | 'skills'>('experience');

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">
            Get To Know More
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={profileImage} 
                alt="About Prescillia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-white space-y-6">
            <h3 className="text-3xl font-bold">
              My Name Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Prescillia Rosart</span>
            </h3>
            <h4 className="text-xl text-gray-300">
              I Am Available For Web Development Projects
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Passionate web developer with a keen eye for design and detail. I specialize in creating modern, 
              responsive web applications that provide exceptional user experiences. Born in 2000, I've been 
              coding and building projects that combine creativity with functionality.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest web technologies. 
              My goal is to create digital experiences that not only look great but also solve real-world problems.
            </p>

          </div>
        </div>

        {/* Skills Section */}
<div className="mt-20">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-white mb-2">My Skills</h3>
    <p className="text-gray-400">What I bring to the table</p>
  </div>

  {/* Two Columns Grid */}
  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    
    {/* Compétences Techniques - Colonne Gauche */}
    <div>
      <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-purple-400">💻</span>
        Compétences Techniques
      </h4>
      <div className="grid grid-cols-2 gap-6">
        {techSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <Icon className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-medium text-center">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>

    {/* Savoir-être - Colonne Droite */}
    <div>
      <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-pink-400">✨</span>
        Savoir-être
      </h4>
      <div className="space-y-4">
        {softSkills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
</div>
    </section>
  );
}

export default About;