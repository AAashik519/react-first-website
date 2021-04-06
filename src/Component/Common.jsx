import React from 'react';
import { NavLink } from 'react-router-dom';
 

const Common = (props) => {
    const {name,imgsrc,visit,btnName} = props;
    return (
        <>
        <section id="header" className ="d-flex align-items-center header-style">
               <div className="container-fluid nav_bg">
                   <div className="row">
                       <div className="col-lg-12 mx-auto" >
                           <div className="row">

                               <div className="col-lg-6 col-10 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column ">

                                   <h1>{name} </h1>
                                   <h2 className="my-5 text-size">You are the next Great Developer </h2>
                                   <NavLink className='  btn-get-started'  to={visit}>{btnName}</NavLink>

                               </div>
                               <div className="col-lg-6 pt-5  order-1 order-lg-2 header-img">
                                   <img src={imgsrc} className="" alt="header img" />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>




        </section>
        </>
    );
};

export default Common;