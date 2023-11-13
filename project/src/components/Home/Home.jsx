import "./Home.css";
import blankImage from "../../assets/images/blankImage.png";
import AstronautsInSpace from "../current_astronauts";
import ChatGpt from "../ChatGPT_Feature/chatgpt_feature";
import MarsRoverImages from "../MarsRoverImages/MarsRoverImages";
import Contactus from "../Email_Feature/email_feature";

function Home() {
  return (
    <div className="background-container">
      {/*  Background image */}
      <div className="background-image"></div>
      <MarsRoverImages />
      {/* Image of the day */}
      <div className="image-placeholder">
        <img src={blankImage} alt="Image Placeholder" />
      </div>
      <ChatGpt />
      <Contactus />
      <AstronautsInSpace />
    </div>
  );
}
export default Home;
