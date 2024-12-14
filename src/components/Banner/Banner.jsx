import banner from "../../../Image/banner-1.jpg";
const Banner = () => {
  return (
    <div
      className={`hero min-h-screen bg-cover bg-center bg-no-repeat max-w-[1400px] mx-auto rounded-3xl`}
      style={{ backgroundImage: `url(${banner})`}}
    >
      <div className="hero-overlay bg-opacity-20 rounded-3xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Transform Your Recipes into Tools for Achieving Your Fitness Goals
          </h1>
          <p className="mb-5 text-white px-3 sm:px-0 sm:text-xl">
            Cooking and eating well go hand in hand. Take charge of your health
            journey with accurate calorie information for all your favorite
            meals!
          </p>
          <div className="flex flex-col justify-center items-center sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-4 md:space-x-6 pt-3">
            <button className="btn border-none w-full sm:w-36 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Explore Now</button>
            <button className="btn btn-outline w-full sm:w-36 text-white">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
