import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Home = () => {
  const [picture, setPicture] = useState("");
  const [caption, setCaption] = useState("");

  const AppDiv = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
  `;

  const StyledHeading = styled.h1`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: #283618;
  `;

  const StyledImg = styled.div`
    margin: 5%;
    display: flex;
    justify-content: center;
  `;

  const StyledP = styled.p`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: #283618;
  `;

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        setPicture(response.data.url);
        setCaption(response.data.explanation);
      });
  }, []);
  return (
    <AppDiv>
      <StyledHeading>
        <h1>NASA Image of the day!</h1>
      </StyledHeading>
      <StyledImg>
        <img src={picture} alt="NASA picture of the day!" />
      </StyledImg>
      <StyledP>
        <p>{caption}</p>
      </StyledP>
    </AppDiv>
  );
};

export default Home;
