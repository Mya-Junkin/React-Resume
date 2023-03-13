
import React from 'react';
import './styles/blog.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Blog = () => {
    return (
        <div>
            <Header />
            <div className='Blog-Body'>
                <p>Blog page</p>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;