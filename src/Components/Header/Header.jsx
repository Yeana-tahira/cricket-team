
import logo from "../../assets/logo.png";
import shadow from "../../assets/shadow.png";
import { BiSolidCoin } from "react-icons/bi";
import bannermain from "../../assets/bannermain.png";

const Header = ({coin, setCoin}) => {
  const handleAddToCoin = () => {
    const amount = 2640000;
    setCoin((prev) => prev + amount); 
  };


  return (
    <div className=" ">
      <nav>
        <div className="flex justify-between items-center mx-12 p-10">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center gap-14">
            <button className="cursor-pointer">Home</button>
            <button className="cursor-pointer">Fixture</button>
            <button className="cursor-pointer">Teams</button>
            <button className="cursor-pointer">schedules</button>
            <button className="border border-gray-200 h-8 px-3 flex items-center gap-1 text-black rounded-lg text-sm cursor-pointer">
              <span>{coin}</span>
              <span>coin</span>
              <BiSolidCoin className="text-base" />
            </button>
          </div>
        </div>
      </nav>

      <div className=" relative mx-28 mb-10 ">
        <img className=" bg-black rounded-2xl w-full h-screen" src={shadow} alt="" />
      </div>

      <div className="absolute top-2/3 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white flex flex-col  items-center space-y-4">
        <a href="https://youtu.be/fBIqzpkaIy8?si=ZOYcJ0K-XQLjJc_-">
          <img className="" src={bannermain} alt="Banner" />
        </a>
        <h1 className=" font-semibold text-3xl ">
          Assemble Your Ultimate Dream 11 Cricket Team{" "}
        </h1>
        <h3 className=" text-gray-200 text-lg">
          {" "}
          Beyond Boundaries Beyond Limits
        </h3>
        <div
          style={{ borderColor: "#E7FE29" }}
          className="border p-2 rounded-xl">
          <button
            onClick={handleAddToCoin}
            style={{ backgroundColor: "#E7FE29" }}
            className="text-black p-3 rounded-xl font-bold cursor-pointer">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
