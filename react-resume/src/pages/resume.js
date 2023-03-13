
import React from 'react';
import './styles/resume.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer'; 


const Resume = () => {
    return (
        <div className='Resume-Page'>
            <Header className='Header'/>
            <div className='Resume-Body'>
                <p>resume</p>
            </div>
            <Footer className='.Footer'/>
        </div>
    );
};

export default Resume;