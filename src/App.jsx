import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./app.css";

const App = () => {
  return (
    <div className="flex flex-col bg-black">
      <Header />
      <Gallery />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
