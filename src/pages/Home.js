import React, { useEffect } from 'react'
import { fetchBooks,fetchMovies } from '../redux/charactersSlice'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

function Home() {

    const movies = useSelector((state) => state.characters.movies);
    const books = useSelector((state) => state.characters.books);
    const loading = useSelector((state)=>state.characters.isLoading)

    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchBooks());
        dispatch(fetchMovies())
    },[dispatch])

    const renderBooks = (()=>{
        return (
          <React.Fragment>
             <h1 style={{color:"white"}}>BOOKS</h1>
            <div className="row">
                {books.map((item, index) => {
                  return (
                    <div className="col-12" key={index}>
                      <image
                        className="card-img-top"
                        src=""
                        alt="Card image cap"
                      />
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <button href="#" className="btn btn-primary">
                            Go somewhere
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
             
            </div>
          </React.Fragment>
        );
    })

    const renderMovies =(()=>{
        return (
          <React.Fragment>
            <h1 style={{ color: "white" }}>
              MOVIES
            </h1>
            <div className="row">
              {movies.map((item, index) => {
                return (
                  <div className="col-12" key={index}>
                    <image
                      className="card-img-top"
                      src=""
                      alt="Card image cap"
                    ></image>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          {item.academyAwardNominations} ||{" "}
                          {item.academyAwardWins} || Tomato ={" "}
                          {item.rottenTomatoesScore}
                        </p>
                        <button href="#" className="btn btn-primary">
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
    })

  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div>
            {renderBooks()}
            {renderMovies()}
          </div>
        )}
      </div>
    </>
  );
}

export default Home