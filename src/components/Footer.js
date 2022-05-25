import React from 'react'

const Footer = () => {
    return (
        <div className='footer-bg '>
            <div className='footer-container'>
                <h1 className='footer-title'>Don't miss out, Stay updated</h1>
                <div className="input-box d-flex justify-content-between">
                    <input type="email" name="" id="" placeholder='Enter your email address' className='email-input' />
                    <input type="button" value="Subscribe" className='submit-btn' />
                </div>
                <p className='footer-text'>Don't hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally</p>

                <div className="footer-social-icon d-flex justify-content-center">

                    <a href="https://twitter.com/solanverse?s=21&t=zbA3tmaM-_Fdh_HCssRgWw" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-twitter social-icon"></i>
                    </a>
                    <a href="https://www.instagram.com/accounts/login/?next=/solanverse/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram social-icon"></i>
                    </a>

                    <a href="https://www.youtube.com/channel/UCCBTuGN_8eNHEavXzm5EsLg" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-youtube social-icon"></i>
                    </a>

                    <a href="https://t.me/solanverse" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-telegram social-icon"></i>
                    </a>

                    <a href="https://medium.com/@solanverse/solanverse-f7d96aad37c3" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-medium social-icon"></i>
                    </a>
                </div>

            </div>
        </div>
    )
}
export default Footer;
