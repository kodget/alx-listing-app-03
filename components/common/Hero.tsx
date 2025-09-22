const Hero = () => {
  return (
    <div className="h-screen bg-[url('/assets/image-1.jpg')] bg-cover bg-center m-auto rounded-xl  flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-8xl md:text-6xl sm:text-3xl max-[600px]:text-2xl font-extrabod">
          Find your favourite place here!
        </h1>
        <p className="text-white font-medium mt-4">
          The best place for over 2 million properties worldwide!
        </p>
      </div>
    </div>
  );
};
export default Hero;
