import { useState, useEffect } from 'react';

interface SkillCategory {
  title: string;
  skills: { name: string; proficiency: number }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Veb Dizayn",
      skills: [
        { name: "UI/UX Dizayn", proficiency: 40 },
        { name: "Responsive Dizayn", proficiency: 100 },
        { name: "Wireframing", proficiency: 30 },
        { name: "Figma", proficiency: 70 },
        { name: "Photoshop", proficiency: 20 },
        { name: "Illustrator", proficiency: 0 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "Javascript", proficiency: 70 },
        { name: "ReactJS", proficiency: 70 },
        { name: "CSS3", proficiency: 90 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "HTML5", proficiency: 90 },
        { name: "Bootstrap", proficiency: 80 },
        { name: "Git", proficiency: 70 },
        { name: "Docker", proficiency: 10 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJs", proficiency: 60 },
        { name: "PostgreSQL", proficiency: 70 },
        { name: "ExpressJS", proficiency: 50 },
        { name: "MySQL", proficiency: 65 },
        { name: "Python", proficiency: 50 },
        { name: "FastAPI", proficiency: 50 },
      ]
    }
  ];

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in">
          Ko'nikmalarim<span className="text-purple-600">.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4 animate-slide-up">
              <h2 className="text-xl md:text-2xl font-bold text-center">{category.title}</h2>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-300 animate-fade-in"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-center">{skill.name}</p>
                      <div className="w-1/2">
                        <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{
                              width: animation ? `${skill.proficiency}%` : '0%',
                              transition: 'width 2s ease-in-out'
                            }}
                          ></div>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-600 sm:text-sm">{`${skill.proficiency}%`}</span>
                        </div>
                      </div>
                    </div>
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
