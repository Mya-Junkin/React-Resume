
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/home.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import profile_pic from '../assets/images/clown selfie.jpg';
import LinkedIn_Logo from '../assets/images/LinkedIn-Logo.png';
import GitHub_Logo from '../assets/images/GitHub-Logo.png';
import Insta_Logo from '../assets/images/Insta-Logo.png';


const Home = () => {
    return (
        <div className='Home-Page'>
            <Header />
            <div className='Home-Body'>
                <div className='Left-Col'>
                    <img src={profile_pic} alt='profile headshot' className='Profile-Pic' />
                    <h4>Computer Scientist &#8212; Artist &#8212; Lifelong Learner</h4>
                    <hr class='rounded' className='Left-Sep' />
                    <div className='Home-Icons'>
                        <NavLink
                            to={{ pathname: 'https://www.linkedin.com/in/mya-junkin-b57b981b3/' }}
                            target='_blank'
                        >
                            <img src={LinkedIn_Logo} alt='LinkedIn Logo' className='icon' />
                        </NavLink>

                        <NavLink
                            to={{ pathname: 'https://github.com/Mya-Junkin' }}
                            target='_blank'
                        >
                            <img src={GitHub_Logo} alt="GitHub Logo" className='icon' />
                        </NavLink>

                        <NavLink
                            to={{ pathname: 'https://www.instagram.com/enchanted_churro/' }}
                            target='_blank'
                        >
                            <img src={Insta_Logo} alt="Instagram Logo" className='icon' />
                        </NavLink>
                    </div>
                </div>
                <div className='Right-Col'>
                    <h2 className='About-Header'>About</h2>
                    <p className='About-Body'>
                        Hello, I&#39;m Mya!&#58398;<br />
                        I&#39;m a computer scientist with a bachelor&#39;s degree from West Virginia University (Dec. &#39;22).
                        Currently training from the AWS Developer Associate Certification and
                        seeking software engineering positions in the Raleigh&#8211;Durham, North Carolina area. <br />
                        When I&#39;m not glued to my screen developing my skills, I enjoy creating digital art, studying Spanish, and traveling.
                    </p>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Home;