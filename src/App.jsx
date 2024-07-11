import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
const config = [
  {
    title: "Easy",
    targetTime: 1,
  },
  {
    title: "Not Easy",
    targetTime: 5,
  },
  {
    title: "Getting Tough",
    targetTime: 10,
  },
  {
    title: "Pros Only",
    targetTime: 15,
  },
];
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {config.map((item) => {
          return (
            <TimerChallenge
              key={item.targetTime}
              title={item.title}
              targetTime={item.targetTime}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
