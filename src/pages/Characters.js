import React, { useEffect } from "react";
import { fetchCharacters } from "../redux/charactersSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";

function Characters() {
  const data = useSelector((state) => state.characters.characters);
  const loading = useSelector((state)=>state.characters.isLoading)
  const page = useSelector((state)=>state.characters.page)
  const isThereNextPage = useSelector((state)=>state.characters.isThereNextPage)
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <>
      <h1 className="container">
        <SearchBar />
        <p style={{ color: "white" }}>Characters</p>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <img
                  className="card-img-top"
                  src="https://w0.peakpx.com/wallpaper/47/295/HD-wallpaper-the-one-ring-lotr-rings-fantasy.jpg"
                  alt="Card image cap"
                />
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}{index}</h5>
                    <p className="card-text">
                      {item.birth} || {item.death} || {item.race} ||{" "}
                      {item.gender}
                    </p>
                    <button className="btn btn-primary">-</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {isThereNextPage && !loading && (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(fetchCharacters(page))}>
              Next Page
            </button>
          )}
        {loading ? <Loading /> : ""}
      </h1>
    </>
  );
}

export default Characters;






