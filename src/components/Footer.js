import React, { Fragment } from 'react';

const Footer = () => {
    const footerStyle = {
        display: "flex",
        justifyContent: "center",
        heigth: "40px",
        margin: "0 auto",
        listStyleType: "none",
        background: "#ababab",
        padding: "5px"
    }
    return <div className="footer">
        <ul style={footerStyle}>
            <a className="footer-a" href="https://www.facebook.com/www.naec.ge">
                <li className="fb"></li>
            </a>
            <a className="footer-a" href="https://goo.gl/RZlzZq">
                <li className="yt"></li>
            </a>
        </ul>
    </div>
}

export default Footer;