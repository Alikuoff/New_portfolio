import { Github, ExternalLink } from 'lucide-react';

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
      title: "E-Tijorat Dashboard",
      description: "Onlayn do'kon operatsiyalarini boshqarish orzusi bilan real vaqtli analitikasi va inventar boshqarishini ta'minlaydigan keng qamrovli dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      githubUrl: "https://github.com/username/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard.demo"
    },
    {
      title: "Ob-havo App",
      description: "Global ob-havo kuzatishini ta'minlaydigan real vaqtli ob-havo ilovasi, batafsil prognozlar va interaktiv xaritalar bilan.",
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/username/weather-app",
      liveUrl: "https://weather-app.demo"
    },
    {
      title: "Muhimmat Boshqarish Tizimi",
      description: "Haqiqiy vaqtli yangilanishlar va jamoa hamkorligi xususiyatlari bilan birgalikda ishlaydigan muhimmat boshqarish platformasi.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Redux", "MongoDB", "Express"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://task-manager.demo"
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
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
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