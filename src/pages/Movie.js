import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar'

function Movie() {

  const item = useSelector((state)=>state.characters.movie)

  const renderMovie=(()=>{
    return (
      <div className="row char">
        <div className="col-12 char">
          <img
            className="card-img-top"
            src="https://images2.alphacoders.com/279/thumb-1920-279162.jpg"
            alt="Card image cap"
          />
          <div className="card char">
            <div className="card-body home book">
              <h1 className="char">{item.name ? <p>{item.name} </p> : ""}</h1>
            </div>
            <div className='movietext'>
              <p>Rotten Tomatoes : {item.rottenTomatoesScore} </p>
              <p>Academy Nominations : {item.academyAwardNominations} </p>
              <p>Academy Wins : {item.academyAwardWins} </p>
            </div>
          </div>
        </div>
      </div>
    );
  })

  return (
    <>
      <Navbar />
      {renderMovie()}
    </>
  );
}

export default Movie