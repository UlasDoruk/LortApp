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
             <h1 className='container' style={{color:"white"}}>BOOKS</h1>
            <div className="row">
                {books.map((item, index) => {
                  return (
                    <div className="col-12" key={index}>
                      <img
                        className="card-img-top"
                        src="https://w0.peakpx.com/wallpaper/47/295/HD-wallpaper-the-one-ring-lotr-rings-fantasy.jpg"
                        alt="Card image cap"
                      />
                      <div className="card">
                        <div className="card-body home">
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
            <h1 className='moviess' style={{ color: "white" }}>
              MOVIES
            </h1>
            <div className="row">
              {movies.map((item, index) => {
                return (
                  <div className="col-12" key={index}>
                    <img
                      className="card-img-top"
                      src="https://w0.peakpx.com/wallpaper/47/295/HD-wallpaper-the-one-ring-lotr-rings-fantasy.jpg"
                      alt="Card image cap"
                    />
                    <div className="card">
                      <div className="card-body home">
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
      <div className="container chrct">
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