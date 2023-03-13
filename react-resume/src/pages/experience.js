
import React from 'react';
import './styles/experience.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Experience = () => {
    return (
        <div className='Experience-Page'>
            <Header />
            <div className='Experience-Body'>
                <div className='Internships'>
                    <p>Interships Section</p>
                </div>
                <div className='Projects'>
                    <p>Projects Section</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Experience;