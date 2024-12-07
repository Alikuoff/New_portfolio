const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="max-w-7xl mx-auto text-center">
            <h4 className="text-xl md:text-5xl lg:text-6xl font-bold mb-5 text-center animate-fade-in">
                Web sahifamga xush kelibsiz<span className="text-purple-600">.</span>
                </h4>
            <p>&copy; {new Date().getFullYear()} Aliqulov Azizjon. Barcha huquqlar himoyalangan.</p>
            <p className="mt-2">Saytning asosiy maqsadi foydali ma'lumotlar, bilim va tajribalarni almashish, shuningdek, professional rivojlanishga hissa qo'shishdan iborat.</p>
            <div className="mt-4 flex flex-wrap justify-center space-x-4">
                <a href="https://www.facebook.com/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-facebook-square mr-2 text-blue-500" aria-hidden="true">Facebook</i> 
                </a>
                <a href="https://www.instagram.com/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-instagram mr-2 text-pink-500" aria-hidden="true">Instagram</i>
                </a>
                <a href="https://www.linkedin.com/in/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-linkedin mr-2 text-blue-700" aria-hidden="true">LinkedIn</i> 
                </a>
                <a href="https://www.twitter.com/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-twitter-square mr-2 text-blue-400" aria-hidden="true">Twitter</i> 
                </a>
                <a href="https://www.github.com/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-github mr-2 text-gray-400" aria-hidden="true">GitHub</i> 
                </a>
            </div>
            </div>
    </footer>
  );
};

export default Footer; 