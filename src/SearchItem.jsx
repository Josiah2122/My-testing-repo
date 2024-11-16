import React from "react";

export default function SearchItem({ search, setSearch }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search Item</label>
      <input
        autoFocus
        required
        id="search"
        type="text"
        name="name"
        role="searchbox"
        placeholder="Search Item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
