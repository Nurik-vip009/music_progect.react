import React from 'react';
import './sec3.css'
import img_1 from '../image/IMAGE (42).png'
import img_2 from '../image/IMAGE (43).png'
const Sec3 = () => {
    return (
        <section className="sec3">
            <div className="sec3-box">
                 <div className="sec3-left">
                     <button>
                         <img src={img_2} alt=""/>
                     </button>
                     <h5>Meet your host</h5>
                     <h1>Jacob Paulaner</h1>
                     <p>Jacob has a background in audio engineering, and has <br/>
                         been podcasting since the early days.</p>
                     <p>He’s here to help you level up your game by sharing <br/>
                         everything he’s learned along the way.</p>
                 </div>
                 <div className="sec3-right">
                     <img src={img_1} alt=""/>
                 </div>
            </div>
        </section>
    );
};

export default Sec3;