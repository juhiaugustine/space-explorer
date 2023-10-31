import "./Home.css";
import blankImage from "../../assets/images/blankImage.png";
import AstronautsInSpace from "../current_astronauts";
import ChatGpt from "../chatgpt_feature";
function Home() {
  return (
    <div className="background-container">
      {/*  Background image */}
      <div className="background-image"></div>

      {/* Image of the day */}
      <div className="image-placeholder">
        <img src={blankImage} alt="Image Placeholder" />
      </div>
      <ChatGpt />

      <AstronautsInSpace />
    </div>
  );
}
export default Home;
