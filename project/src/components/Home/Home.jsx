import "./Home.css";
import blankImage from "../../assets/images/blankImage.png";
import AstronautsInSpace from "../Current_Astronauts/current_astronauts";
import ChatGpt from "../chatgpt_feature/chatgpt_feature";
import { useState, useEffect } from "react";
import axios from "axios";


function Home() {
  const [imageOfDay, setImageOfDay] = useState([]); 

  useEffect(() => {
		axios
			.get("https://api.nasa.gov/planetary/apod?api_key=TtAYobEewJeiCkJh9FX4k2a07cRLScoCnkbbQHlc")
			.then((res) => {
				setImageOfDay(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [imageOfDay]);

  return (
    <div className="background-container">
      {/*  Background image */}
      <div className="background-image"></div>

      {/* Image of the day */}
      <div className="image-placeholder">
        <img src={imageOfDay.url} alt={imageOfDay.title} />
      </div>
      <ChatGpt />

      <AstronautsInSpace />
    </div>
  );
}
export default Home;
