import "./Home.css";
import blankImage from "../../assets/images/blankImage.png";

import AstronautsInSpace from "../Current_Astronauts/current_astronauts";
import ChatGpt from "../ChatGPT_Feature/chatgpt_feature";
import MarsRoverImages from "../MarsRoverImages/MarsRoverImages";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const centerStyle = {
    textAlign: "center", // Aligns the text content to the center
    color: "white", // Sets the text color to white
  };
  const [imageOfDay, setImageOfDay] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=TtAYobEewJeiCkJh9FX4k2a07cRLScoCnkbbQHlc"
      )
      .then((res) => {
        setImageOfDay(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [imageOfDay]);

  return (
    <div className="background-container">
      {/* Background image */}
      <div className="background-image"></div>

      {/* Scrollable container for components */}
      <div className="scrollable-components">
        {/* Mars Rover Images */}
        <MarsRoverImages />

        {/* Other components */}
        <div className="column">
          <div className="bottom-components">
            <div className="bottom-components-container">
              <h1 className="subHeading"> Ask a Question </h1>
              <ChatGpt />
            </div>

            <div className="bottom-components-container">
              <h1 className="subHeading"> Astronomy Picture of the Day </h1>
              <div className="image-placeholder">
                <img src={imageOfDay.url} alt={imageOfDay.title} />
              </div>
            </div>

            <div className="bottom-components-container">
              <h1 className="subHeading"> Astronauts in Space </h1>
              <AstronautsInSpace />
            </div>
          </div>
        </div>
        <p style={centerStyle}>
          Have a question?{" "}
          <Link to="/contactus" style={{ color: "white" }}>
            Reach out
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
export default Home;
