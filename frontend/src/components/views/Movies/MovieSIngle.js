import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleMovie } from "../../../state/actions/MovieActions";
import Loading from "../../layout/Loading";

const MovieSingle = () => {
  let params = useParams();
  const { loading, movie, message } = useSelector((state) => state.moviesState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleMovie(params.id));
  }, []);

  return (
    <div className="container" style={style.contentWrapper}>
      {loading ? (
        <Loading />
      ) : message ? (
        <div>{message}</div>
      ) : (
        <>
          <div className="row" style={style.pageTitle}>
            {movie.title}
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img
                src={movie.imagesUrl}
                className="img-fluid"
                alt={movie.title}
              />
            </div>
            <div className="col-sm-8">
              <p style={style.sectionTitle}>Release Year</p>
              <p style={style.sectionContent}>{movie.releaseYear}</p>
              <p style={style.sectionTitle}>Description</p>
              <p style={style.sectionContent}>{movie.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieSingle;

const style = {
  contentWrapper: {
    minHeight: "calc( 100vh - 92px )",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  pageTitle: { fontSize: "30px", padding: "10px" },
  sectionTitle: { fontSize: "20px", marginBottom: "5px" },
  sectionContent: { marginBottom: "10px", textAlign: "justify" },
};
