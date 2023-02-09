import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar'

function Book() {

  const item = useSelector((state)=>state.characters.book)

  const renderBook=(()=>{
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
              <h1 className="char">
                {item.name ? <p>{item.name} </p> : ""}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  })

  return (
    <>
      <Navbar />
      {renderBook()}
    </>
  );
}

export default Book