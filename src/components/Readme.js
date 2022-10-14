import React from 'react';
import './Readme.css';
import pic1 from '../Images/pic1.png';
import pic2 from '../Images/pic2.png';
import pic3 from '../Images/pic3.png';
import pic4 from '../Images/pic4.png';

function Readme() {
  return (
    <div className='Readme'>
        
        <div className='readme-items'>
            <div className='profile1'>
                <div className='profile-pic1'>
            <img src={pic1}></img>
           <p className='readme-para'>Sven Vanth Live in ibiza</p>
           </div>
            <div className='readme-bt'>
            <button >READ ME</button>
            </div>
        </div>
        
        <div className='second-profile'>
            <div className='profile-pic2'>
            <img src={pic2}></img>
            
            <p className='readme-para'>SKG festival</p>
            </div>
            <div className='readme-bt2'>
            <button >READ ME</button>
            </div>
        </div>

        <div className='third-profile'>
            <div className='profile-pic3'>
            <img src={pic3}></img>
           
            <p className='readme-para'>jorja smith In London</p> </div>
            <div className ='readme-bt'>
            <button >READ ME</button>
            </div>  
        </div>

        <div className='fourth-profile'>
            <div className='profile-pic4'>
            <img src={pic4}></img>
            
            <p className='readme-para'>Lol world Championship</p></div>
             <div className='readme-bt'>
            <button>READ ME</button>
          </div>  
        </div>
    </div>
        <hr></hr>
    </div>
  )
}

export default Readme;