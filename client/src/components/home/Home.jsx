import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeCards from "./HomeCards";
import NewHomePage from "./NewHomePage";

function Home() {
  return (
    <React.Fragment>
      <HomeCarousel />
      <HomeCards />
      <NewHomePage />
    </React.Fragment>
  );
}

export default Home;
