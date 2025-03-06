import { Github, ExternalLink } from 'lucide-react';
import tibxizmatImage from '../images/tibxizmat.png';
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Tibxizmat_bot",
      description: "Tibbiy xizmatlar haqida Telegram bot. Klinikalar ro‘yxati va xizmatlar haqida ma’lumot, eng yaqin va eng arzon klinikalarni topish, foydalanuvchi geolokatsiyasiga asoslangan klinika qidirish.",
      image: tibxizmatImage,
      technologies: ["React.js", "Node.js", "node-telegram-bot-api", "PostgreSQL", "Docker", "Fly.io", "Express.js"],
      githubUrl: "https://github.com/Alikuoff/tib_xizmatbot",
      liveUrl: "https://t.me/tibxizmat_bot"
    },
    {
      title: "AnimeHub",
      description: "AnimeHub - bu Next.js, TypeScript, Tailwind CSS, shadcn/ui va Jikan API yordamida yaratilgan, Sevimli animelaringizni izlash va kuzatish uchun platforma.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQHQVipWU3-OQQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705785937766?e=2147483647&v=beta&t=gKrSIkGXr92gVQbhmnnhYWpuLzP0v95CtZ9buSnASPc",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Jikan API"],
      githubUrl: "https://github.com/username/animehub",
      liveUrl: "https://animehub-uz.netlify.app/"
    },
    {
      title: "KriptoBozor",
      description: "Kriptovalyuta bozori veb-sayti Next.js 14, TypeScript, Tailwind CSS, shadcn/ui va CoinGecko API yordamida yaratilgan. Ushbu platforma kriptovalyuta narxlari va bozor ma'lumotlarini kuzatish uchun mo'ljallangan.",
      image: "https://forkast.news/wp-content/uploads/2021/11/bitcoin-trend-price-bear-or-bull-movement-analysis-2021-08-28-11-29-11-utc-1260x840.jpg",
      technologies: [
        "Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion",
        "Chart.js", "react-chartjs-2", "chartjs-chart-financial", "chartjs-adapter-date-fns",
        "Lucide React", "next-themes", "class-variance-authority", "clsx", "date-fns", "Radix UI", "CoinGecko API"
      ],
      githubUrl: "https://github.com/username/kriptobozor",
      liveUrl: "https://kriptobozor.demo"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-6xl md:text-7xl font-bold mb-16">
          Loyihalar<span className="text-purple-600">.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
