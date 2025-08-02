import { FaFlag } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
const Player = ({ player, handleAddToSelected }) => {
  const { name, image, country, role, battingType, biddingPrice, } = player;

  return (
    
      <div className="card bg-base-100 h-max border border-gray-300 ml-24 p-6 rounded-2xl">
        <figure className="">
          <img className="h-60 w-full rounded-2xl" src={image} alt="" />
        </figure>
        <div className="card-body pt-5">
          <h2 className="card-title">

            <div className="flex gap-4">
            <FaUser className="text-gray-700 text-2xl"/>
            <div className="badge badge-secondary text-lg font-semibold">{name}</div>
            </div>

            <div className="flex justify-between pb-6">
            <div className="flex gap-2 text-gray-500">
            <FaFlag className=" pt-2 text-xl" />
            <h2>{country}</h2>
            </div>
            <button className=" bg-gray-200 rounded-l p-1">{role}</button>
            </div>
            <hr className=" text-gray-300" /> 
            <h2 className="pt-4 pb-2 font-semibold">Rating</h2>
            <div className="flex justify-between pb-2">
            <h2 className="font-semibold  ">{battingType}</h2>
            <h2 className=" text-gray-500">{battingType}</h2>
            </div>
            <div className="flex justify-between ">
            <h2 className="font-semibold ">Price: ${biddingPrice}</h2>
            <button onClick={ () => handleAddToSelected(player)} className=" border border-gray-300 rounded-lg p-1 cursor-pointer">Choose Player</button>
            </div>
          </h2>
          
        </div>
      </div>
    
  );
};

export default Player;
/*
  This is the end of the Player.jsx file. No additional code is required here.
*/