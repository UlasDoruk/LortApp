import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

function Character() {

  const char = useSelector((state)=>state.characters.character)

  const renderCharacter = () => {
    return (
      <React.Fragment>
        <br></br>
        <div className="row">
          <div className="col-12">
            <img
              className="card-img-top"
              src="https://w0.peakpx.com/wallpaper/47/295/HD-wallpaper-the-one-ring-lotr-rings-fantasy.jpg"
              alt="Card image cap"
            />
            <div className="card">
              <div className="card-body home">
                <h1 className="char">Name = {char.name} Gender = {char.gender} </h1>
                <h3 className="card-text">
                  {char.birth} || {char.death}
                </h3>
                <h3 className="card-text">
                  {char.race}
                </h3>
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