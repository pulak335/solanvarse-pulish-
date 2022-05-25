import React from 'react'
import i5 from '../assets/images/Character 1 copy v1.jpg';
import i6 from '../assets/images/Character 3 copy.jpg';

function Owner() {
    return (
        <div className='container'>


            <div className='row  '>
                <div className="col-md-6 col-12">
                    <div className="ownerimg">

                        <img src={i5} alt="Character" />
                        <h3>GARRY SMITH</h3>
                        <p>Founder</p>
                        <p>
                            <a href="http://" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-linkedin-in social-icon"></i>
                            </a></p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="ownerimg">

                        <img src={i6} alt="Character" />
                        <h3>ADNREW LEWIS</h3>
                        <p>Co-Founder</p>
                        <p><a href="http://" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in social-icon"></i>
                        </a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Owner