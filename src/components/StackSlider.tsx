import { useState, useEffect, useCallback } from 'react';

interface Technology {
  name: string;
  image: string;
  color: string;
  imageScale?: string;
}

const StackSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const technologies: Technology[] = [
    { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png', color: 'bg-blue-100 text-blue-800' },
    { name: 'Node.js', image: 'https://wallpapercave.com/wp/wp4924004.jpg', color: 'bg-green-100 text-green-800', imageScale: 'scale-300' },
    { name: 'TypeScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png', color: 'bg-blue-100 text-blue-800' },
    { name: 'HTML5', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png', color: 'bg-orange-100 text-orange-800' },
    { name: 'CSS3', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1024px-CSS3_logo_and_wordmark.svg.png', color: 'bg-purple-100 text-purple-800' },
    { name: 'MongoDB', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1024px-MongoDB_Logo.svg.png', color: 'bg-green-100 text-green-800' },
    { name: 'Git', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png', color: 'bg-red-100 text-red-800' },
  ];

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === technologies.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }
  }, [isTransitioning, technologies.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-gray-100 p-8 rounded-3xl relative border-2 border-purple-600">
      <div className="flex items-center justify-between">
        <div className="w-8" />

        <div className="flex-1 mx-8">
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? 'transition-all' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col items-center space-y-4"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-24 h-24 object-cover rounded-sm"
                  />
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-8" />
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsTransitioning(true);
              setTimeout(() => setIsTransitioning(false), 500); // Wait for transition to complete
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StackSlider;