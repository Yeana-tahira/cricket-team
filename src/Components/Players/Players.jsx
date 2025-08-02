import Player from "../Player/Player";
import { useEffect } from "react";
import { useState } from "react";

const Players = ({ setPage, handleAddToSelected, selectedPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <div className=" flex justify-between px-14 py-8">
        <h1 className=" text-3xl font-bold">Available Players</h1>

        <div className="flex gap-4">
          <button onClick={() => setPage('players')} className=" bg-amber-300 border rounded px-2 py-1 cursor-pointer">
            Available
          </button>
          <button onClick={() => setPage('selected')} className=" border rounded px-2 py-1 cursor-pointer">
            Selected <span>({selectedPlayers.length})</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          {players.map((player) => (
          <Player key={player.id} handleAddToSelected={handleAddToSelected} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
