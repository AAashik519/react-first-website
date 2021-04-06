import React from 'react';
import Card from './Card';
 
import  Sdata from './Sdata'

const Service = () => {
    return (
        <>
            <div className=" my-5">
                <h1 className="text-center"> Our Service</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="mx h-auto">

                        <div className="row gy">

                        {
                            Sdata.map( (value, index ) =>{
                            return <Card   imgsrc={value.imgsrc} titel ={value.titel} key ={value.index} />
                            })
                        }

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Service;