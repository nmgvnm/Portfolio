import React from "react";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import About from "./components/About";
import Article from "./components/Article";
import Info from "./components/Info";
import Footer from "./components/Footer";
import KakaoMap from "./components/KakaoMap";

function App() {
  return (
   <div>
    <Reset />
    <Header />
    <About />
    <Article />
    <Info />
    <KakaoMap />
    <Footer />
   </div>
  );
}

export default App;
