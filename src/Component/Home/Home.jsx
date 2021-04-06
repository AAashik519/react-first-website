import React from 'react';
 
import Common from '../Common';
 import web from '../../img/programming_tips.jpg'
 
 

const Home = () => {
    return (
         <Common  
         name ="Grow your Skill with React Js"
         imgsrc ={web} 
         visit ="/service"
         btnName ="Get Started"
         />
    );
};

export default Home; 