import { Link } from 'react-router-dom';
import { fetchMovies, getMovie } from '../redux/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Loading from '../components/Loading';


function Movies() {

  let dispatch = useDispatch()

  const movies = useSelector((state)=>state.characters.movies)
  const status = useSelector((state)=>state.characters.status)

  const handleMovieItem=((item)=>{
    dispatch(getMovie(item));
  })

  useEffect(()=>{
    dispatch(fetchMovies())
  },[])

  return (
    <>
      <Navbar />
      {status ==="loading" ? <Loading /> : ""}
      <div className="row movie">
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
                    <p>Academy Nominations : {item.academyAwardNominations} </p>
                    <p>Academy Wins : {item.academyAwardWins} </p>
                  </div>
                  <div className="moviebtn">
                    <Link to={`/Movie/${item._id}`}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleMovieItem(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-film"
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
      <Footer/>
    </>
  );
}

export default Movies