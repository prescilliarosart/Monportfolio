import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState("");

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
dark:from-gray-50 dark:via-gray-100 dark:to-gray-50 py-20"
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">
            Interessé par mon profil ?
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white dark:text-black mb-4">
            Travaillons ensemble.
          </h2>
          <p className="text-gray-400 dark:text-gray-600 text-lg">
            N'hésitez pas à me contacter
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-4">
            <input
              className="w-full px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-xl text-white dark:text-black placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
              type="text"
              name="from_name"
              placeholder="Nom"
              required
            />
            <input
              className="w-full px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-xl text-white dark:text-black placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
              type="email"
              name="from_email"
              placeholder="E-mail"
              required
            />
          </div>
          <textarea
            className="w-full px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-xl text-white dark:text-black placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
            name="message"
            placeholder="Message"
            rows={5}
            required
          ></textarea>

          <button 
            type="submit" 
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            Envoyer un message
          </button>
          {messageStatus && <p className="message-status">{messageStatus}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
