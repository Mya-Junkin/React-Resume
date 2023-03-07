import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/experience'>EXPERIENCE</NavLink></li>
                <li><NavLink to='/blog'>BLOG</NavLink></li>
                <li><NavLink to='/resume'>RESUME</NavLink></li>
                <li><a href='mailto:mya.junkin@gmail.com'>CONTACT</a></li>
            </ul>
        </div>

    );
};

export default Navbar;