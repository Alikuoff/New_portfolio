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
        { name: "UI/UX Dizayn", proficiency: 90 },
        { name: "Responsive Dizayn", proficiency: 95 },
        { name: "Wireframing", proficiency: 85 },
        { name: "Foydalanuvchi Tadqiqotlari", proficiency: 80 },
        { name: "Figma", proficiency: 95 },
        { name: "Photoshop", proficiency: 90 },
        { name: "Illustrator", proficiency: 85 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "Javascript", proficiency: 95 },
        { name: "ReactJS", proficiency: 90 },
        { name: "CSS3", proficiency: 95 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "HTML5", proficiency: 95 },
        { name: "Figma", proficiency: 90 },
        { name: "Bootstrap", proficiency: 85 },
        { name: "Git", proficiency: 95 },
        { name: "Docker", proficiency: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJs", proficiency: 90 },
        { name: "PostgreSQL", proficiency: 85 },
        { name: "ExpressJS", proficiency: 90 },
        { name: "MySQL", proficiency: 85 },
        { name: "Python", proficiency: 80 },
        { name: "Django", proficiency: 85 },
        { name: "FastAPI", proficiency: 90 },
        { name: "Docker", proficiency: 85 },
        { name: "Git", proficiency: 90 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Effective communication", proficiency: 95 },
        { name: "Collaboration", proficiency: 90 },
        { name: "Commitment", proficiency: 95 },
        { name: "Leadership", proficiency: 90 },
        { name: "Problem Solving", proficiency: 95 },
        { name: "Time Management", proficiency: 90 },
        { name: "Adaptability", proficiency: 95 },
        { name: "Teamwork", proficiency: 90 }
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
          Ko'nikmalarim<span className="text-purple-600">.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-center">{category.title}</h2>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-300"
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