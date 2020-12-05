import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import fb from '../../Assets/images/fb.png';
import twitter from '../../Assets/images/twitter.png';
import gPlus from '../../Assets/images/gPlus.png';
import linkedin from '../../Assets/images/linkedin.png';
import youTube from '../../Assets/images/youTube.png';

const Footer = () => {
    
        const socialLinks =  [{"path":"/fb",  "src":fb},
                {"path":"/twitter",  "src":twitter},
                {"path":"/gPlus",  "src":gPlus},
                {"path":"/linkedin",  "src":linkedin},
                {"path":"/yTube",  "src":youTube}
            ]

    return (
        <footer>
            <div className="container">
                <div className="copyright">
                    <p>*Terms &amp; Conditions</p>
                </div>
                <div className="SocialLinks">
                    <ul>
                        {
                            socialLinks.map(e => 
                                <li key={e.path}>
                                    <Link to={e.path}><img src={e.src} alt="" /> </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>           
        </footer>        
    );
}


export default withRouter(Footer);
