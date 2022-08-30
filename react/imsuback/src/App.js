import React from "react";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import About from "./components/About";
import Article from "./components/Article";
import Info from "./components/Info";
// import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
   <div>
    <Reset />
    <Header />
    <About />
    <Article />
    <Info />
    {/* <Map /> */}
    <Footer />
   </div>
  );
}

export default App;
