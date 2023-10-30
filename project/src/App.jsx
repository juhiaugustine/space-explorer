import AstronautsInSpace from "./components/current_astronauts";
import ChatGpt from "./components/chatgpt_feature";
import "./assets/css/App.css";

function App() {
  return (
    <>
      <div>
        <ChatGpt />
      </div>
      <div>
        <AstronautsInSpace />
      </div>
    </>
  );
}

export default App;
