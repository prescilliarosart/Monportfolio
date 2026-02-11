import {useState, useEffect} from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

function Hero() {
  const fullText = 'Web Developer!';
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

useEffect(() => {
  if (isTyping) {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  } else {
    if (displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(true);
    }
  }
}, [displayText, isTyping, fullText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Effet de grille/points optionnel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Effets lumineux flous (optionnel) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="text-white space-y-6">
            <p className="text-lg text-gray-400 flex items-center gap-2">
              <span className="inline-block">👋</span> Hi, I'm
            </p>
            <h1 className="text-6xl md:text-6xl font-bold">
              Prescillia Rosart
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-300">
              I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline-block min-w-[320px]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
              </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              We work with professionals and leaders who want to build careers that fulfil them intellectually, financially
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/prescillia-rosart/" target="_blank" rel="noreferrer">
                <FaLinkedin/>
              </a>
              <a href="https://github.com/prescilliarosart" target="_blank" rel="noreferrer">
                <FaGithub/>
              </a>
            </div>
          </div>

          {/* Image (optionnel) */}
          <div className="relative">
            <div className="w-[350px] h-[500px] overflow-hidden from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center rounded-[120px_20px_160px_160px]">
              {/* Vous pouvez mettre une image ici */}
              <img 
                src={profileImage}
                alt="Prescillia - Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;