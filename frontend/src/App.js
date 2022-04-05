import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MoviesAll from "./components/views/Movies/MoviesAll.js";
import MovieSingle from "./components/views/Movies/MovieSingle";

const App = () => {
  return (
    <div className="container-fluid" style={style}>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesAll />} exact />
        <Route path="/movie/:id" element={<MovieSingle />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

const style = {
  padding: "0px",
};
