import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Movies from "./components/views/Movies";

const App = () => {
  return (
    <div className="container-fluid" style={style}>
      <Header />
      <Movies />
      <Footer />
    </div>
  );
};

export default App;

const style = {
  padding: "0px",
};
