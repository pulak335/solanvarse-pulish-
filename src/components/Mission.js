import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Bitcoin from '../assets/images/allgif/372102230_BITCOIN_400px.gif';
import m1 from '../assets/images/mission/m1.png';
import m2 from '../assets/images/mission/m2.png';
import m3 from '../assets/images/mission/m3.png';
import m4 from '../assets/images/mission/m4.png';
import m5 from '../assets/images/mission/m5.png';
import m6 from '../assets/images/mission/m6.png';
import m7 from '../assets/images/mission/m7.png';
import m8 from '../assets/images/mission/m8.png';
import m9 from '../assets/images/mission/m9.png';
import m10 from '../assets/images/mission/m10.png';
import m11 from '../assets/images/mission/m11.png';

const Mission = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="mission_section adaptive">
            <div className="container">
                <div className="mission_area">
                    <div className="mission_title">
                        <p data-aos="fade-up" data-aos-duration="2000">Our Mission</p>
                        <div data-aos="fade-up" data-aos-duration="3000" className="offer_section_button mt-3 mb-3 m-md-0">
                            <button>Solanverse Future Missions</button>
                        </div>
                    </div>
                    <div className="mission_body">
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m2} alt="mission" />
                            <h4 className="mt-2 mb-2 m-md-0">ADDING AN ABILITY TO BUY  COMMODITIES SUCH AS GOLD & SILVER WITHOUT MAKING CHARGE
                            </h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m1} alt="mission" />
                            <h4>BUY, SELL & LEASE VIRTUAL REAL ESTATE</h4>
                        </div>

                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m3} alt="mission" />
                            <h4>Play to Earn Games</h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m4} alt="mission" />
                            <h4>ACCESS A WEALTH OF INFORMATION & INDUSTRY INSIGHT AT A CLICK OF A FINGER </h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m5} alt="mission" />
                            <h4>AN OPPORTUNITY TO ACCESS EDUCATIONAL & LEARNING TOOLS</h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m6} alt="mission" />
                            <h4>VIRTUAL EVENTS, STORES, GAMES & GALLERIES</h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m7} alt="mission" />
                            <h4>NEXT GEN PRODUCT & AD OPPORTUNITIES</h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m8} alt="mission" />
                            <h4>SECURE DECENTRALISED VIRTUAL WORLD</h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m9} alt="mission" />
                            <h4>A FRIENDLY ENVIRONMENT FOR PARTNERSHIPS & SOCIAL NETWORKING</h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m10} alt="mission" />
                            <h4>MULTIPLE STREAM’S OF INCOME BOTH ACTIVE & PASSIVE</h4>
                        </div>
                        <div className="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m11} alt="mission" />
                            <h4>ALL INFORMATION IN ONE DECENTRALISED HUB</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="global_image d-none d-md-block">
                <img src={Bitcoin} alt="bitcoin" />
                <div className="mission_bg_color"></div>
            </div>
        </div>
    );
};

export default Mission;