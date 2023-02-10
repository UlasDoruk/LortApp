import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCharacters } from "../redux/charactersSlice";
import { getCharacter } from "../redux/charactersSlice";
import { useDispatch, useSelector } from "react-redux";
// import Loading from "../components/Loading"
import SearchBar from "../components/SearchBar";
import  Navbar  from "../components/Navbar";

function Characters() {
  const data = useSelector((state) => state.characters.characters);
  const status = useSelector((state) => state.characters.status);
  const page = useSelector((state)=>state.characters.page)
  // const isThereNextPage = useSelector((state)=>state.characters.isThereNextPage)

  let dispatch = useDispatch();

  const handleID = (item)=>{
    dispatch(getCharacter(item));
  }

  const handleCharacters = ((page)=>{
    dispatch(fetchCharacters(page))
  })
  
  useEffect(()=>{
    if(status==="idle"){handleCharacters()}
  },[status])

  return (
    <>
      <Navbar />
      {/* {status === "loading" ? <Loading /> : ""} */}
      <h1 className="container">
        <SearchBar />
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-md-3" key={index}>
                <img
                  className="card-img-top"
                  src="https://w0.peakpx.com/wallpaper/47/295/HD-wallpaper-the-one-ring-lotr-rings-fantasy.jpg"
                  alt="Card image cap"
                />
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="card-text">
                      {item.gender && <p>Gender : {item.gender}</p>}
                      {item.birth && <p>Birth : {item.birth}</p>}
                      {item.death && <p>Death : {item.death}</p>}
                      {item.race && <p className="last">Race : {item.race}</p>}
                    </div>
                    <div className="charbtn">
                      <Link to={`/Characters/${item._id}`}>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleID(item)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-person-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path
                              fillRule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* {isThereNextPage &&  (
          <button
            className="btn btn-primary nextPage"
            onClick={handleCharacters(page)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          </button>
        )} */}
      </h1>
    </>
  );
}

export default Characters;






