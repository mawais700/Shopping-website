import React from 'react';

const Card = (props)=>{

  return (
    <>
      
      <div className='col-md-4'>
        <div className="card">
            <img className="card-img-top" src={props.src} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <i className="bi bi-arrow-right card_icon" ></i>
                    <a href="#" className="btn btn-sm">Explore Now</a>
                </div>
        </div>
      </div>
        
    </>
  )
}

export default Card;