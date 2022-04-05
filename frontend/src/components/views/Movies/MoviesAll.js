import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { fetchMovies } from "../../../state/actions/MovieActions";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((movie) => (
          <div className="col-sm-2 mb-3" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={movie.imagesUrl}
                  alt="Card image"
                />
                <div className="card-body">
                  <h4 className="card-title">{movie.title}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

const MoviesAll = () => {
  const itemsPerPage = 30;

  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [currentItems, setCurrentItems] = useState(movies);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, movies]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
          // disabledClassName={"page-link disabled"}
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
