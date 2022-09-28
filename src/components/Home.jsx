import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col bg-black">
      <Header />
      <Gallery />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
