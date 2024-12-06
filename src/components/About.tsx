import StackSlider from './StackSlider';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold">
            Men haqimda<span className="text-purple-600">.</span>
          </h1>
          <div className="border-l-4 border-purple-600 pl-6">
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl">
              Qiziqarli va funktsional veb-saytlarni ishlab chiqish - men uchun yoqimli mashg'ulot, va shuning uchun har bir yangi g'oyalarga katta qziqish bildiraman.
            </p>
          </div>
        </div>

       

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Mening Stackim<span className="text-purple-600">.</span>
            </h2>
            <StackSlider />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">
              Manzilim <span className="text-purple-600">.</span>
            </h2>
            <div className="bg-gray-100 p-8 rounded-3xl">
              <div className="relative h-[300px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                  alt="Digital Globe"
                  className="rounded-2xl w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;