import React from 'react';
import './sec4.css'
const Sec4 = () => {
    return (
        <section className="sec4">
            <div className="sec4-box">
                <div className="sec4-card">
                    <div className="sec4-card_left">
                        <h5>Email Newsletter</h5>
                        <h2>Subscribe <br/>
                            for updates</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="91" viewBox="0 0 147 91" fill="none">
                            <g clipPath="url(#clip0_2_178)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.6849 0.218952C12.8838 2.83026 7.12218 5.36244 1.40003 8.1419C0.166813 8.73538 -0.34613 10.209 0.245816 11.4355C0.837763 12.6719 2.31747 13.1865 3.54083 12.593C9.23338 9.83331 14.9456 7.32097 20.7072 4.72945C21.9503 4.16564 22.503 2.70168 21.9506 1.46527C21.3882 0.218962 19.928 -0.344852 18.6849 0.218952Z" fill="#118DA8"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M61.3048 31.1097C52.8795 49.3987 45.3813 68.1031 37.3505 86.5603C36.8079 87.8165 37.3801 89.2706 38.6232 89.8147C39.8762 90.3587 41.3262 89.7948 41.8787 88.5386C49.8897 70.1111 57.368 51.4364 65.7835 33.1869C66.3557 31.9406 65.8134 30.4766 64.5802 29.9029C63.3371 29.3292 61.877 29.8733 61.3048 31.1097Z" fill="#118DA8"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M133.591 35.8577C136.285 52.6729 139.452 69.4386 141.958 86.2835C142.165 87.6287 143.418 88.5584 144.759 88.3605C146.111 88.1627 147.038 86.8968 146.841 85.5516C144.325 68.6869 141.158 51.9013 138.455 35.0663C138.238 33.7211 136.975 32.8011 135.634 33.0187C134.282 33.2363 133.374 34.5026 133.591 35.8577Z" fill="#118DA8"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2_178">
                                    <rect width="147" height="91" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="sec4-card_right">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec4;