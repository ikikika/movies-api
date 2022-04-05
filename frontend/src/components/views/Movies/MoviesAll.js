import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MoviesAll = () => {
  const state = useSelector((state) => state.movies);

  console.log(process.env.REACT_APP_API_URL);

  return (
    <div className="container" style={style.contentWrapper}>
      <div className="row" style={style.pageTitle}>
        Popular Movies
      </div>
      <div className="row" style={style.filterWrapper}>
        <div className="input-group mb-3" style={style.searchField}>
          <input type="text" className="form-control" placeholder="Search" />
          <button className="btn btn-primary" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <select className="form-select mb-3" style={style.sortField}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div className="row">
        {[...Array(50)].map((value, index) => (
          <div className="col-sm-2 mb-3" key={index}>
            <Link to={`/movie/${index}`}>
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/150"
                  alt="Card image"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe {index}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesAll;

const style = {
  contentWrapper: {
    minHeight: "calc( 100vh - 92px )",
  },
  pageTitle: { fontSize: "30px", padding: "10px" },
  filterWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchField: {
    width: "300px",
  },
  sortField: {
    width: "300px",
    marginRight: "12px",
  },
};
