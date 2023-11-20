import React from 'react';
import "./Section4.css";
import ThumbsupMan from ".././Images/ThumbsupMan.png";
import Quotes from "../Images/Quotes.png"

const Section4 = () => {
  return (
    <div className='section4'>
        <p className='says'>What Our Customer Says</p>
        <div className='flexSection1'>
            <div>
                <img src={ThumbsupMan} alt="" />
            </div>
            <div>
                <img src={Quotes} alt="" />
            </div>
            <div>
                <p className='sunil'>SUNIL GUPTA</p>
                <p className='ca'>Chartered Accountant</p>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortL orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortor, et convallis libero vehicula ut. or, et convallis libero vehicula ut.</p>
                <div className='RectBar'></div>
            </div>
        </div>
    </div>
  )
}

export default Section4