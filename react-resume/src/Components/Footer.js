import './styles/Footer.css';
import LinkedIn_Logo from '../assets/images/LinkedIn-Logo.png';
import GitHub_Logo from '../assets/images/GitHub-Logo.png';
import Insta_Logo from '../assets/images/Insta-Logo.png';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='Footer-Div'>
            <p className='Footer-Rights'>
                Built using React JS<br />
                Mya Junkin &#169; 2023<br />
                All rights reserved.
            </p>
            <div className='Footer-Icons'>
                <NavLink
                    to={{ pathname: 'https://www.linkedin.com/in/mya-junkin-b57b981b3/' }}
                    target='_blank'
                >
                    <img src={LinkedIn_Logo} alt='LinkedIn Logo' className='icon'/>
                </NavLink>

                <NavLink
                    to={{ pathname: 'https://github.com/Mya-Junkin' }}
                    target='_blank'
                >
                    <img src={GitHub_Logo} alt="GitHub Logo" className='icon'/>
                </NavLink>

                <NavLink
                    to={{ pathname: 'https://www.instagram.com/enchanted_churro/' }}
                    target='_blank'
                >
                    <img src={Insta_Logo} alt="Instagram Logo" className='icon'/>
                </NavLink>
            </div>
        </div>
    );
};


export default Footer;