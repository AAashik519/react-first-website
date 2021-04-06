import React from 'react';
import { NavLink } from 'react-router-dom';
 



const Card = (props) => {
    return (
         <>
            <div className=" col-lg-4  ">
                <div className="card " style={{width: 'auto'}} >
                    <img src={props.imgsrc} className="card-img-top" alt= "Service Images" style ={{ height:'300px'}}/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold ">{props.titel} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" className="btn btn-outline-primary" >Grow Skill</NavLink>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Card;