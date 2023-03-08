import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';


const Navbar = () => {
    return (
        <div className='Navbar-Div'>
            <ul>
                <li><NavLink to='/'
                    style={({ isActive }) =>
                    ({
                        color: isActive ? '#EDF1D6' : '#2F3438',
                        textDecoration: isActive ? 'underline' : 'none'
                        
                    })
                    }
                >HOME</NavLink></li>

                <li><NavLink to='/experience'
                    style={({ isActive }) =>
                    ({
                        color: isActive ? '#EDF1D6' : '#2F3438',
                        textDecoration: isActive ? 'underline' : 'none'

                    })
                    }
                >EXPERIENCE</NavLink></li>

                <li><NavLink to='/blog'
                    style={({ isActive }) =>
                    ({
                        color: isActive ? '#EDF1D6' : '#2F3438',
                        textDecoration: isActive ? 'underline' : 'none'

                    })
                    }
                >BLOG</NavLink></li>

                <li><NavLink to='/resume'
                    style={({ isActive }) =>
                    ({
                        color: isActive ? '#EDF1D6' : '#2F3438',
                        textDecoration: isActive ? 'underline' : 'none'

                    })
                    }
                >RESUME</NavLink></li>

                <li><a href='mailto:mya.junkin@gmail.com'>CONTACT</a></li>
            </ul>
        </div>

    );
};

export default Navbar;