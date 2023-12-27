import React from "react";

function SearchItem({ search, setSearch }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ flexDirection: "row" }} className="card add">
          <div className="cb-container">
            <button id="add-btn">+</button>
          </div>
          <div className="txt-container">
          <input
          id="search"
          autoFocus
          type="text"
          placeholder="Search Any Item..."
          role="searchbox"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchItem;
