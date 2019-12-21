import React from "react";
import SearchIcon from "@material-ui/icons/Search";
const Searcher = props => {
  return (
    <div className="wrap">
      <div className="searcher">
        <form onSubmit={props.getSearch} className='searcher'>
          <input
            type="text"
            name="search"
            className="searcherTerm"
            placeholder="Enter Search Here"
          />
          <button className="searcherButton">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searcher;
