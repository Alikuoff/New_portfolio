const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="max-w-7xl mx-auto text-center">
            <h4 className="text-xl md:text-5xl lg:text-6xl font-bold mb-5 text-center animate-fade-in">
                Web sahifamga xush kelibsiz<span className="text-purple-600">.</span>
                </h4>
            <p>&copy; {new Date().getFullYear()} Aliqulov Azizjon. Barcha huquqlar himoyalangan.</p>
            </div>
    </footer>
  );
};

export default Footer;