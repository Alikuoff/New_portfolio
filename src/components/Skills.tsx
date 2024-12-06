
interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Veb Dizayn",
      skills: ["UI/UX Dizayn", "Responsive Dizayn", "Wireframing", "Foydalanuvchi Tadqiqotlari", "Figma", "Photoshop", "Illustrator"]
    },
    {
      title: "Frontend",
      skills: ["Javascript", "ReactJS", "CSS3", "Tailwind CSS", "HTML5", "Figma", "Bootstrap", "Git", "Docker"]
    },
    {
      title: "Backend",
      skills: ["NodeJs", "PostgreSQL", "ExpressJS", "MySQL", "Python", "Django", "FastAPI", "Docker", "Git",]
    },
    {
      title: "Soft Skills",
      skills: ["Effective communication", "Collaboration", "Commitment", "Leadership", "Problem Solving", "Time Management", "Adaptability", "Teamwork"]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-6xl md:text-7xl font-bold mb-16">
          Ko'nikmalarim<span className="text-purple-600">.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                  >
                    <p className="text-gray-700">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;