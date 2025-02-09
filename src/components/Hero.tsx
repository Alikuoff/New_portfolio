import profileImage from '../images/me.jpg';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-light">Salom, mening ismim Azizjon 👋🏼</h2>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-purple-600">Frontend</span>
              <br />
              Dasturchi
            </h1>
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-md">
          Men, Aliqulov Azizjon, texnologiyalar va dasturlash sohasida faoliyat yurituvchi, rivojlanish va innovatsiyaga qiziqadigan mutaxassisman. Zamonaviy texnologiyalar yordamida samarali yechimlar yaratishni va raqamli olamda o'z o'rnimni topishni maqsad qilganman.          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              <a href="tel:+998883146777">Bog'lanish</a>
            </button>
            <button className="bg-gray-100 px-6 py-3 rounded-full hover:bg-gray-200 transition project-button">
              <a href="/projects">Loyihalarni ko'rish</a>
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-blue-500 hover:text-blue-700" />
            </a>
            <a href="https://github.com/Alikuoff" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/aziz-alikulov-a35755294/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-blue-500 hover:text-blue-700" />
            </a>
            <a href="https://instagram.com/justadzee" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-red-500 hover:text-red-700" />
            </a>
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-100 rounded-full"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-[500px] h-[500px] object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;