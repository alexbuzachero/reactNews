import React from "react";

const SearchForm = props => (
  <form onSubmit={props.getNews}>
    <div className="ui action input">
      <input type="text" name="search" placeholder="Keyword or Phrase Search" />
      <button className="ui button" type="submit">
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
