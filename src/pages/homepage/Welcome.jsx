import React from 'react';
import logo from '../../assets/favicon.svg';

const Welcome = () => {
    return (
        <div style={{ textAlign: 'center', maxWidth: '1000px' }}>
            <h1 style={{ color: 'purple', fontSize: '36px' }}>Welcome to our website!</h1>
            <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
            <p style={{ fontSize: '18px' }}>
                Welcome to the OpenAI toolkits!
                We are a collection of cutting-edge tools and resources designed to help you explore the exciting world of artificial intelligence and machine learning.
            </p>
            <br/>
            <p style={{ fontSize: '18px' }}>
                Our toolkits offer a wide range of functionality, including natural language processing, computer vision, and reinforcement learning. Whether you are a seasoned developer or just getting started with AI, we have something for you.
            </p>
            <br/>
            <p style={{ fontSize: '18px' }}>
                Some of the features you can expect to find in our toolkits include:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <li style={{ fontSize: '18px' }}>
                    <a href="/chat" style={{ color: 'purple', textDecoration: 'none' }}>Chat</a>
                </li>
                <li style={{ fontSize: '18px' }}>
                    <a href="/image" style={{ color: 'purple', textDecoration: 'none' }}>Image</a>
                </li>
                <li style={{ fontSize: '18px' }}>
                    <a href="/about" style={{ color: 'purple', textDecoration: 'none' }}>About Us</a>
                </li>
            </ul>
        </div>
    );
};

export default Welcome;
