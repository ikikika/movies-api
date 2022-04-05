import React, { useState } from "react";

const Movies = () => {
  return (
    <div className="container" style={style.contentWrapper}>
      <div className="row" style={style.pageTitle}>
        Popular Movies
      </div>
      <div className="row" style={style.filterWrapper}>
        <div class="input-group mb-3" style={style.searchField}>
          <input type="text" class="form-control" placeholder="Search" />
          <button class="btn btn-primary" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <select class="form-select mb-3" style={style.sortField}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div className="row">
        {[...Array(50)].map((index) => (
          <div class="col-sm-2 mb-3" key={index}>
            <div class="card">
              <img
                class="card-img-top"
                src="https://via.placeholder.com/150"
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

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
  },
};
