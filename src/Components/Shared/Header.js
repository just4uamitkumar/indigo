import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Header = () => {
    const logo = 'LOGO'
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">{logo}</Link>
                </div>
            </div>
        </header>
    );
}


export default withRouter(Header);
