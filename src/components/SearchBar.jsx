import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././css/home.css";
function SearchBar(props) {
  return (
    <div className="  rounded  " id="input-wrapper">
      <div className=" input-group border-0  ">
        <input
          ref={props.inputValue}
          type="search"
          className="form-control form-control-lg border-0  input-properties text-light "
          placeholder="Search movies"
          aria-label="Search"
          aria-describedby="search-addon"
        />

        <button
          onClick={props.handleForm}
          type="submit"
          className="btn btn-outline-none  input-button-properties btn-secondary"
        >
          Search 
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
