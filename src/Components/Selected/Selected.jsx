import { RiDeleteBinLine } from "react-icons/ri";
const Selected = ({ setPage, selectedPlayers}) => {
    
    return (
        <div>
          <div className="flex justify-between px-14 py-8">
            <h1 className="text-3xl font-bold">
              Selected Players <span>({selectedPlayers.length}/12)</span>
            </h1>
    
            <div className="flex gap-4">
              <button onClick={() => setPage("players")} className="bg-amber-300 border rounded px-2 py-1 cursor-pointer">
                Available
              </button>
              <button className="border rounded px-2 py-1 cursor-pointer">
                Selected <span>({selectedPlayers.length})</span>
              </button>
            </div>
          </div>


        <div className="px-14 py-8 space-y-4">
        {selectedPlayers.length === 0 ? (
          <p>No players selected yet.</p>
        ) : (
          selectedPlayers.map(({ id, name, country, role, image }) => (
            
            <div key={id} className="p-4 border rounded bg-white shadow flex gap-4 items-center justify-between">
              <div className=" flex items-center gap-4">
                <img className=" h-16 w-16 rounded-lg" src={image} alt="" />
              <div>
                <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm text-gray-600">{country}</p>
              <p className="text-sm text-gray-600 italic">{role}</p>
              </div>

              </div>
              <button className=" cursor-pointer">
                <RiDeleteBinLine />
              </button>
            </div>
          ))
        )}
      </div>

          <div className="px-14 py-8">
            <button
              onClick={() => setPage("players")}
              className="bg-amber-300 border rounded px-2 py-1 cursor-pointer"
            >
              Add More Player
            </button>
          </div>
        </div>
      );
    };
export default Selected;
