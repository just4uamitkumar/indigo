import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { FaPlane, FaHotel, FaBed, FaBus, FaTrain, FaPhone } from 'react-icons/fa';

const Header = () => {
    const logo = 'LOGO';

    const navLinks = [
        {'name':'FLIGHTS', 'path':'/Flight', 'icon': <FaPlane/>}, 
        {'name':'HOTELS', 'path':'/Hotel', 'icon': <FaHotel/> },
        {'name':'HOMESTAYS',  'path':'/HomeStays', 'icon': <FaBed/>}, 
        {'name':'BUS', 'path':'/Bus', 'icon': <FaBus/> },
        {'name':'TRAINS',  'path':'/Trains', 'icon': <FaTrain/>},         
        {'name':'CONTACT US', 'path':'/Contact', 'icon': <FaPhone/>}        
      ];


    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">{logo}</Link>
                </div>
                <nav>
                    <ul>
                        {navLinks.map((e, index) =>
                            <li key={index}>
                                <NavLink to={e.path}>{e.icon} {e.name}</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default withRouter(Header);
