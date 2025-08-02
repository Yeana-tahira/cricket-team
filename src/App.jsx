import "./App.css";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Selected from "./Components/Selected/Selected";

function App() {
  const [page, setPage] = useState("players");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [coin, setCoin] = useState(0);

  const handleAddToSelected = (player) => {
    if (!selectedPlayers.find((p) => p.id === player.id)) {
      if (coin >= player.biddingPrice) {
        setSelectedPlayers([...selectedPlayers, player]);
        setCoin((prevCoin) => prevCoin - player.biddingPrice); 
      } else {
        alert("Not enough coins to select this player.");
      }
    }
  };

  const handleDeletePlayer = (id) => {
  setSelectedPlayers((prev) => prev.filter((player) => player.id !== id));
  };

  return (
    <>
      <Header coin={coin} setCoin={setCoin}></Header>

      <main>
        {page === "players" && (
          <Players
            handleAddToSelected={handleAddToSelected}
            setPage={setPage}
            selectedPlayers={selectedPlayers}
          />
        )}
        {page === "selected" && (
          <Selected setPage={setPage} 
          selectedPlayers={selectedPlayers}
          handleDeletePlayer={handleDeletePlayer} />
        )}
      </main>
      <div className=" relative isolate">
        <Newsletter></Newsletter>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
