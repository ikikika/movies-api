import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  fetchAllMovies,
  fetchFilteredMovies,
  sortMovies,
  setLoadingToTrue,
} from "../../../state/actions/MovieActions";
import Loading from "../../layout/Loading";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((movie) => {
          return (
            <div className="col-md-2 col-sm-4 col-6 mb-3" key={movie.id}>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={movie.imagesUrl}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      {movie.title} ({movie.releaseYear})
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

const MoviesAll = () => {
  const itemsPerPage = 30;

  const { loading, movies, message } = useSelector(
    (state) => state.moviesState
  );

  const dispatch = useDispatch();

  const [showMovies, setShowMovies] = useState(movies);
  const [currentItems, setCurrentItems] = useState(showMovies);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);

  useEffect(() => {
    setShowMovies(movies);
  }, [movies]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(showMovies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(showMovies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, showMovies]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % showMovies.length;
    setItemOffset(newOffset);
  };

  const [filterText, setFilterText] = useState("");

  const filterTextInput = (event) => {
    setFilterText(event.target.value);
    if (event.target.value.length > 2) {
      dispatch(setLoadingToTrue());
      dispatch(fetchFilteredMovies(event.target.value));
      setItemOffset(0);
    } else {
      dispatch(fetchAllMovies());
    }
  };

  const sortSelection = (event) => {
    dispatch(sortMovies(event.target.value));
  };

  const [programType, setProgramType] = useState("all");

  const programTypeSelection = (event) => {
    setProgramType(event.target.value);
    let moviesArray = [];
    if (event.target.value === "all") {
      moviesArray = movies;
    } else {
      moviesArray = movies.filter(
        (movie) => movie.programType === event.target.value
      );
    }
    setShowMovies(moviesArray);
  };

  return (
    <div className="container" style={style.contentWrapper}>
      <div className="row" style={style.pageTitle}>
        Popular{" "}
        {programType === "all"
          ? "Movies and Series"
          : programType === "movie"
          ? "Movies"
          : programType === "series"
          ? "Series"
          : ""}
      </div>
      <div className="row">
        <div className="col-sm-6 ">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={filterTextInput}
              value={filterText || ""}
            />
            <button className="btn btn-primary">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <div style={style.searchField}>
            <select
              className="form-select mb-3"
              onChange={programTypeSelection}
            >
              <option value="all">All</option>
              <option value="series">Series</option>
              <option value="movie">Movies</option>
            </select>
            <select className="form-select mb-3" onChange={sortSelection}>
              <option value="">Select sorting order</option>
              <option value="year_desc">
                Sort by year in descending order
              </option>
              <option value="year_asc">Sort by year in ascending order</option>
              <option value="title_asc">
                Sort by title in alphabetical order
              </option>
              <option value="title_desc">
                Sort by title in reverse alphabetical order
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        {loading ? (
          <Loading />
        ) : movies.length ? (
          <Items currentItems={currentItems} />
        ) : message ? (
          <div>{message}</div>
        ) : (
          <div>No movies</div>
        )}
      </div>

      <div className="row">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          disabledClassName={"page-item disabled"}
          activeClassName={"page-item active"}
        />
      </div>
    </div>
  );
};

export default MoviesAll;

const style = {
  contentWrapper: {
    minHeight: "calc( 100vh - 92px )",
    paddingBottom: "10px",
  },
  pageTitle: { fontSize: "30px", padding: "10px" },
  searchField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
};
