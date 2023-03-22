import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [picture, setPicture] = useState("");
  const [caption, setCaption] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        setPicture(response.data.url);
        setCaption(response.data.explanation);
      });
  }, []);
  return (
    <div className="App">
      <h1>NASA Image of the day!</h1>
      <div className="image">
        <img src={picture} alt="NASA picture of the day!" />
      </div>
      <div className="caption">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default Home;
