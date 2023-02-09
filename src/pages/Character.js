import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter, getCharacter } from '../redux/charactersSlice';

function Character() {

  let dispatch = useDispatch()
  
  const char = useSelector((state)=>state.characters.character)

  useEffect(()=>{
    dispatch(fetchCharacter(char._id))
  },[dispatch])

  const renderCharacter = () => {
    return (
      <React.Fragment>
        <div className="row char">
          <div className="col-12 char">
            <img
              className="card-img-top"
              src="https://images2.alphacoders.com/279/thumb-1920-279162.jpg"
              alt="Card image cap"
            />
            <div className="card char">
              <div className="card-body home">
                <h1 className="char">
                  {char.name ? <p>Name : {char.name} </p> : ""}
                  {char.Gender ? <p>Gender : {char.gender} </p> : ""}
                </h1>
                <div className="card-text">
                  {char.birth ? <p>Birth : {char.birth} </p> : ""}{" "}
                  {char.death ? <p>Death : {char.death} </p> : ""}
                </div>
                <div className="card-text">
                  {char.race ? <p>Race : {char.race} </p> : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <>
      <Navbar />
      {renderCharacter()}
    </>
  );
}

export default Character