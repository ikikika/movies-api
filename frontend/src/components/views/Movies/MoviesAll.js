import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  fetchAllMovies,
  fetchFilteredMovies,
} from "../../../state/actions/MovieActions";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((movie) => {
          return (
            <div className="col-sm-2 mb-3" key={movie.id}>
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
  const itemsPerPage = 4;

  const { movies, sortOption } = useSelector((state) => state.moviesState);

  const dispatch = useDispatch();

  const [currentItems, setCurrentItems] = useState(movies);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, movies]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  const filterTextInput = (event) => {
    if (event.target.value.length > 2) {
      dispatch(fetchFilteredMovies(event.target.value));
      // go back to page 1
      setItemOffset(0);
    }
  };

  const sortSelect = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="container" style={style.contentWrapper}>
      <div className="row" style={style.pageTitle}>
        Popular Movies
      </div>
      <div className="row" style={style.filterWrapper}>
        <div className="input-group mb-3" style={style.searchField}>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={filterTextInput}
          />
          <button className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <select
          className="form-select mb-3"
          style={style.sortField}
          onChange={sortSelect}
        >
          <option value=""></option>
          <option value="year_desc">Sort by year in descending order</option>
          <option value="year_asc">Sort by year in ascending order</option>
          <option value="title_desc">Sort by title in descending order</option>
          <option value="title_asc">Sort by title in ascending order</option>
        </select>
      </div>
      <div className="row">
        <Items currentItems={currentItems} />
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
          // pageClassName={"page-item"}
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
