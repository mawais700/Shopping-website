import React from "react";


const Rcard =(props)=>{

    return(
        <>
            <div className='col-md-6'>
                      <div className="card" >
                        <img className="card-img-top" src={props.src} alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">{props.title}</h4>
                          <button className="btn btn-sm ">Explore Now!</button>
                        </div>
                      </div>
            </div>
            
        </>
    )
}

export default Rcard;
