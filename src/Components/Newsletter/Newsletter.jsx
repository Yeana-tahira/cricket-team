import shadow from "../../assets/shadow.png";

const Newsletter = () => {
  return (
    <div className="mx-12 p-10 -mb-48 bg-white z-20">
      
      <div className="relative">
        <img className="rounded-2xl w-full" src={shadow} alt="Shadow" />

        {/* Text positioned over the image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-bold text-xl">Subscribe to Our Newsletter</h1>
          <p className=" pt-5">Get the latest updates and news right in your inbox!</p>
          <div className=" flex justify-between pt-5">
            <form>
              <input
                type="text"
                placeholder="Enter Your Email"
                className=" text-gray-500 border w-max rounded-lg p-2"
              />
            </form>
            
            <button className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 text-black font-bold py-3 px-6 rounded-full shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
