import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchBooks,fetchMovies } from '../redux/charactersSlice'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

function Home() {

    const movies = useSelector((state) => state.characters.movies);
    const books = useSelector((state) => state.characters.books);
    const status = useSelector((state) => state.characters.status);

    let dispatch = useDispatch()

    useEffect(()=>{
         dispatch(fetchBooks());
         dispatch(fetchMovies());   
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
                        src="https://wallpaperaccess.com/full/815634.jpg"
                        alt="Card image cap"
                      />
                      <div className="card">
                        <div className="card-body home">
                          <h5 className="card-title">{item.name}</h5>
                          <Link to={`/Book/${item._id}`}>
                            <button className="btn btn-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-book-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                              </svg>
                            </button>
                          </Link>
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
            <br></br>
            <h1 className='moviess' style={{ color: "white" }}>
              MOVIES
            </h1>
            <div className="row">
              {movies.map((item, index) => {
                return (
                  <div className="col-12" key={index}>
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/originals/a2/5b/22/a25b22e84144d268eda0259491e51c88.jpg"
                      alt="Card image cap"
                    />
                    <div className="card">
                      <div className="card-body home">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-text">
                          <p>Rotten Tomatoes : {item.rottenTomatoesScore} </p>
                          <p>
                            Academy Nominations : {item.academyAwardNominations}{" "}
                          </p>
                          <p>Academy Wins : {item.academyAwardWins} </p>
                        </div>
                        <div className='moviebtn'>
                          <Link to={`/Movie/${item._id}`}>
                            <button className="btn btn-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-film"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
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
          </React.Fragment>
        );
    })

  return (
    <>
      <Navbar />
      <div className="container chrct">
        {status === "loading" ? (
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