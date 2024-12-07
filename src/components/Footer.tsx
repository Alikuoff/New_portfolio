const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in">
                WEB SAHIIFAMGA XUSH KELIBSIZ<span className="text-purple-600">.</span>
                </h1>
            <p>&copy; {new Date().getFullYear()} Aliqulov Azizjon. Barcha huquqlar himoyalangan.</p>
            <p className="mt-2">Saytning asosiy maqsadi foydali ma'lumotlar, bilim va tajribalarni almashish, shuningdek, professional rivojlanishga hissa qo'shishdan iborat.</p>
            <div className="mt-4 flex justify-center space-x-4">
                <a href="https://www.facebook.com/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-facebook-square mr-2 text-blue-500" aria-hidden="true"></i> Facebook
                </a>
                <a href="https://www.instagram.com/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-instagram mr-2 text-pink-500" aria-hidden="true"></i> Instagram
                </a>
                <a href="https://www.linkedin.com/in/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-linkedin mr-2 text-blue-700" aria-hidden="true"></i> LinkedIn
                </a>
                <a href="https://www.twitter.com/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-twitter-square mr-2 text-blue-400" aria-hidden="true"></i> Twitter
                </a>
                <a href="https://www.github.com/alikulovazizjon" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-100">
                    <i className="fab fa-github mr-2 text-gray-600" aria-hidden="true"></i> GitHub
                </a>
            </div>
            </div>
    </footer>
  );
};

export default Footer; 