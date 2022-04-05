import React from "react";
import { useParams } from "react-router-dom";

const MovieSingle = () => {
  let params = useParams();
  return <div>movie {params.id} </div>;
};

export default MovieSingle;
