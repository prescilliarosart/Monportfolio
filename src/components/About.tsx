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
  { name: 'Communication' },
  { name: 'Esprit d\'équipe' },
  { name: 'Autonomie' },
  { name: 'Créativité' },
  { name: 'Résolution de problèmes' },
  { name: 'Adaptabilité' }
];


  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
dark:from-gray-50 dark:via-gray-100 dark:to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">
            Apprenez-en davantage
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white dark:text-black">
            A propos de moi
          </h2>
        </div>

        <div className=" gap-12 items-start mb-16">
          
          {/* Text Section */}
          <div className="text-white dark:text-black space-y-6">
            <p className="text-gray-400 dark:text-gray-600 text-xl leading-relaxed text-center">
              Après 4 ans comme référente d'établissements en CFA, où j'ai développé rigueur et sens de l'organisation, j'ai suivi une formation intensive en développement web à la Wild Code School. 
              Aujourd'hui, je crée des interfaces modernes qui allient esthétique et performance.
            </p>

          </div>
        </div>

        {/* Skills Section */}
<div className="mt-20">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-white dark:text-black mb-2">Mes Compétences</h3>
  </div>

  {/* Two Columns Grid */}
  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    
    {/* Compétences Techniques - Colonne Gauche */}
    <div>
      <h4 className="text-2xl font-bold text-white dark:text-black mb-6 flex items-center gap-2">
        <span className="text-purple-400">💻</span>
        Compétences Techniques
      </h4>
      <div className="grid grid-cols-2 gap-6">
        {techSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 p-4 bg-white/5 dark:bg-black/5 rounded-xl hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 group"
            >
              <Icon className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white dark:text-black font-medium text-center">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>

    {/* Savoir-être - Colonne Droite */}
    <div>
      <h4 className="text-2xl font-bold text-white dark:text-black mb-6 flex items-center gap-2">
        <span className="text-pink-400">✨</span>
        Savoir-être
      </h4>
      <div className="space-y-4">
        {softSkills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-4 bg-white/5 dark:bg-black/5 rounded-xl hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
            <span className="text-white dark:text-black font-medium">{skill.name}</span>
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