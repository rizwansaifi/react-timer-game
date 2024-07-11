import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [player, setPlayer] = useState(null);

  function clickHandler() {
    setPlayer(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {player ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
