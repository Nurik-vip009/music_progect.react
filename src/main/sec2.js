import React from 'react';
import './sec2.css'
import img_2 from '../image/IMAGE (39).png'
import img_3 from '../image/IMAGE (40).png'
import img_4 from '../image/IMAGE (41).png'
const Sec2 = () => {
    return (
        <section className="sec2">
            <div className="sec2-box">
                <div className="sec2-top">
                    <h1>Latest episodes</h1>
                    <button>View all episodes</button>
                </div>
                <div className="sec2-bottom">
                    <div className="sec2-top-card">
                        <div className="sec2-top-card_left">
                            <img src={img_2} alt=""/>
                        </div>
                        <div className="sec2-top-card_right">
                            <button className="btn_1">Gear</button>
                            <h5>Episode 3</h5>
                            <h3>Should you get <br/>
                                outboard audio gear?</h3>
                            <p>Is hardware really worth it when it comes to podcasting? The answer is...it <br/>
                                depends. Here’s our reasons on why you might want to consider picking <br/>
                                something up.</p>
                            <button className="btn_2">View Episode Details</button>
                        </div>
                    </div>
                    <div className="sec2-center-card">
                        <div className="sec2-center-card_left">
                            <img src={img_3} alt=""/>
                        </div>
                        <div className="sec2-center-card_right">
                            <button className="btn_3">Tips & Tricks</button>
                            <h5>Episode 2</h5>
                            <h3>Mic tricks to take <br/>
                                you to the next level</h3>
                            <p>Stop rolling with those default settings on your mic. These small tweaks will <br/>
                                take you from sounding good to great.</p>
                            <button className="btn_2">View Episode Details</button>
                        </div>
                    </div>
                    <div className="sec2-bottom-card">
                        <div className="sec2-bottom-card_left">
                            <img src={img_4} alt=""/>
                        </div>
                        <div className="sec2-bottom-card_right">
                            <button className="btn_4">Gear</button>
                            <h5>Episode 1</h5>
                            <h3>The best microphone <br/>
                                under $200</h3>
                            <p>With so many microphones on the market, how are you supposed to know <br/>
                                what’s the best? Take a look at our top picks.</p>
                            <button className="btn_2">View Episode Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec2;