import React from 'react';
import Common from './Common';
import web from '../img/about-us-content.jpg';
 

const About = () => {
    return (
        <div>
            <Common  
            name =" Welcome to About page"
            imgsrc ={web} 
            visit ="/contact"
            btnName ="Contact Now"
               />
        </div>
    );
};

export default About;