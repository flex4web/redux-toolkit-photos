import React, { useRef } from "react";

const SearchInput = () => {
  const searchValue = useRef();
  return (
    <form>
      <div className="card">
        <div className="card-body">
          <div className="input-group mb-3">
            <label htmlFor="searchPhotos" className="input-group-text">
              Search Photos
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              id="searchPhotos"
              ref={searchValue}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
