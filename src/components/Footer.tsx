import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from '../assets/profile.jpg';

export function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-6">

        {/* Photo */}
        <img
          src={profileImage}
          alt="Prescillia Rosart"
          className="w-16 h-16 rounded-full object-cover border border-purple-500/30"
        />

        {/* Nom + métier */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            Prescillia Rosart
          </h3>
          <p className="text-gray-400 text-sm">
            Développeuse web
          </p>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex gap-6 text-gray-400 text-xl">
          <a
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Prescillia Rosart
        </p>

      </div>
    </footer>
  );
}