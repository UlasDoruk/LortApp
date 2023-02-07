import React, { useEffect } from "react";
import { fetchCharacters } from "../redux/charactersSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";

function Characters() {
  const data = useSelector((state) => state.characters.characters);
  const loading = useSelector((state)=>state.characters.isLoading)
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <h1 className="container">
      {loading ? <Loading/> : "Characters"}
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    {item.birth} || {item.death} || {item.race} || {item.gender}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </h1>
  );
}

export default Characters;
