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
            Men O'zbekistondan bo'lgan frontend dasturchiman, sizga foydalanuvchilar uchun yoqimli va chiroyli veb-saytlar yaratishga yordam beraman.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Aloqa qilish
            </button>
            <button className="bg-gray-100 px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Loyihalarni ko'rish
            </button>
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-100 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
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