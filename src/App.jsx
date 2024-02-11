import React from "react";
import HeroSection from "./components/HeroSection";
import CobaAja from "./components/CobaAja";
import Hal1 from "./components/Hal1";
import Hope from "./components/Hope";
import Memory from "./components/Memory";

const App = () => {
  return (
    <>
      <HeroSection />
      <Hal1 />
      <Hope />
      <Memory />
      {/* <CobaAja /> */}
    </>
  );
  // return <CobaAja />;
};

export default App;
