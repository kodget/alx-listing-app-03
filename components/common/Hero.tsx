const Hero = () => {
  return (
    <div className="relative h-screen rounded-xl overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/assets/Image-1.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl z-10"></div>
      
      <div className="relative text-center z-20 px-4">
        <h1 className="text-white text-6xl md:text-5xl sm:text-4xl max-[600px]:text-3xl font-bold mb-4 leading-tight">
          Find your favourite place here!
        </h1>
        <p className="text-white text-lg md:text-base font-medium max-w-2xl mx-auto">
          Discover amazing properties worldwide with the best deals and experiences
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
