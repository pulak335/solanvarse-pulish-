import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import Logo from '../assets/images/logo/logo.png';
import Wallet from '../assets/images/logo/wallet.png';
import i1 from '../assets/images/logo/instagram 2.svg';
import i2 from '../assets/images/logo/i2.png';
import i3 from '../assets/images/logo/i3.png';
import i4 from '../assets/images/logo/i4.png';

import notfound from '../assets/notfound.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="hero_section">
            <div className="mobile_menu_section">
                <div className="mobile_menu_header">
                    <div className="mobile_logo">
                        <img src="https://i.ibb.co/Zd1nrtT/svg-file-of-logo-1.png" alt="SOLANVERSE" />
                    </div>
                    <div className="bars" onClick={() => setToggle(!toggle)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`mobile_nenu ${toggle && 'open'}`} >
                    <div className="hero_top_left">
                        <div className="menu">
                            <ul>
                                <li>
                                    <a href="http://solan-nftmint.com/" target="_blank" rel="noreferrer">nft mINT</a>
                                </li>
                                <li>
                                    <a href="https://solanverse-staking.com/system/login.php" target="_blank" rel="noreferrer">Staking</a>
                                </li>
                                <li>
                                    <a href="http://solan-dapp.com/" target="_blank" rel="noreferrer">DAPP  <sup className='comming'>coming soon</sup> </a>
                                </li>
                                <li>
                                    <a href="#about">About Us</a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1aIpcSAp3zAvhwC1wjTXb2s9BdpHuuEyG/view?usp=sharing" target="_blank" rel="noreferrer">Whitepaper</a>
                                </li>
                                <li>
                                    <a href="#roadmap">Roadmap</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="hero_top_right">
                        <div className="walletbtn">
                            <button href="#">
                                <img src={Wallet} alt="wallet" />
                                <span>Connet to the wallet</span>
                            </button>
                        </div>
                        <div className="ico_list">
                            <ul>
                                <li>
                                    <a href="https://instagram.com/solanverse?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                        <img src={i1} alt="SOLANVERSE" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://medium.com/@solanverse/solanverse-f7d96aad37c3" target="_blank" rel="noreferrer">
                                        <img src={i2} alt="SOLANVERSE" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/solanverse?s=21&t=zbA3tmaM-_Fdh_HCssRgWw" target="_blank" rel="noreferrer">
                                        <img src={i3} alt="SOLANVERSE" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/solanverse" target="_blank" rel="noreferrer">
                                        <img src={i4} alt="SOLANVERSE" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="hero_main">
                    <div className="hero_top">
                        <div className="hero_top_left">
                            <div className="logo">
                                <img src={Logo} alt="SOLANVERSE" />
                            </div>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <a href="http://solan-nftmint.com/" target="_blank" rel="noreferrer">nft mINT</a>
                                    </li>
                                    <li>
                                        <a href="https://solanverse-staking.com/system/login.php" target="_blank" rel="noreferrer">Staking</a>
                                    </li>
                                    <li>
                                        <a href="http://solan-dapp.com/" target="_blank" rel="noreferrer">DAPP <sup className='comming'>coming soon</sup> </a>
                                    </li>
                                    <li>
                                        <a href="#about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/file/d/1aIpcSAp3zAvhwC1wjTXb2s9BdpHuuEyG/view?usp=sharing">Whitepaper</a>
                                    </li>
                                    <li>
                                        <a href="#roadmap">Roadmap</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="hero_top_right">
                            <div className="ico_list">
                                <ul>
                                    <li>
                                        <a href="https://instagram.com/solanverse?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                            <img src={i1} alt="SOLANVERSE" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/@solanverse/solanverse-f7d96aad37c3" target="_blank" rel="noreferrer">
                                            <img src={i2} alt="SOLANVERSE" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/solanverse?s=21&t=zbA3tmaM-_Fdh_HCssRgWw" target="_blank" rel="noreferrer">
                                            <img src={i3} alt="SOLANVERSE" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/solanverse" target="_blank" rel="noreferrer">
                                            <img src={i4} alt="SOLANVERSE" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=' mx-auto'>
                        <h1 className='notfound-title'>OPSS!</h1>
                        <h2 className='notfound-subtitle text-white'>Page not found</h2>
                        <div className="d-flex justify-content-center">
                            <img className='mx-auto not-found-img' src={notfound} alt="notfound" srcSet="" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className='btn-not-found mt-5'>
                                <Link to='/'>GO TO HOMEPAGE</Link>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;