import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/features/PhotoSlice";

import SearchInput from "../components/SearchInput";
const Photos = () => {
  const { photos, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedPhoto, setModifiedPhoto] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  useEffect(() => {
    if (photos) {
      const newPhoto = photos.map((item) => {
        const { id, title, url, thumbnailUrl } = item;
        return {
          id: id,
          title: title,
          url: url,
          thumbnailUrl: thumbnailUrl,
        };
      });
      setModifiedPhoto(newPhoto);
    } else {
      setModifiedPhoto([]);
    }
  }, [photos]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchInput />
      <div className="my-3 text-center">
        <h4>Photo List</h4>
      </div>
      <div className="row">
        {modifiedPhoto.map((item) => {
          const { id, title, url, thumbnailUrl } = item;
          return (
            <div className="col-sm-3 mb-3">
              <div className="card" key={id}>
                <img src={thumbnailUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <a href={url} className="btn btn-secondary mt-3">
                    Details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Photos;
