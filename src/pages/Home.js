import React, { useEffect } from 'react'
import { fetchBooks,fetchMovies } from '../redux/charactersSlice'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../components/Loading';

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
             <h1 className='container'>BOOKS</h1>
            <div className="row">
                {books.map((item, index) => {
                  return (
                    <div className="col" key={index}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
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
            <h1 className='container'>MOVIES</h1>
            <div className="row">
                {movies.map((item, index) => {
                  return (
                    <div className="col-2" key={index}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">
                            {item.academyAwardNominations} ||{" "}
                            {item.academyAwardWins} || Tomato ={" "}
                            {item.rottenTomatoesScore}
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
          </React.Fragment>
        );
    })

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {renderBooks()}
          {renderMovies()}
        </div>
      )}
    </div>
  );
}

export default Home