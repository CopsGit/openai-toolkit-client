import React from 'react';
import logo from "../../assets/favicon.svg";
import {Button} from "@mui/material";

const AboutMe = () => {
    return (
        <div style={{ textAlign: 'center', maxWidth: '1000px' }}>
            <h1 style={{ color: 'purple', fontSize: '36px' }}>Welcome to our website!</h1>
            <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
            <p style={{ fontSize: '18px', color: "white" }}>
                As an OpenAI toolkit, we are a collection of powerful tools and resources for exploring the world of artificial intelligence and machine learning. We are constantly updating and improving our toolkits to bring you the best possible experience.
            </p>
            <br/>
            <p style={{ fontSize: '18px', color: "white"  }}>
                Our team is made up of a diverse group of researchers and developers who are passionate about advancing the field of AI. We are committed to making our toolkits as accessible and user-friendly as possible, so that developers of all skill levels can use them to build amazing projects.
            </p>
            <br/>
            <p style={{ fontSize: '18px', color: "white"  }}>
                Some of the key areas that our toolkits focus on include natural language processing, computer vision, and reinforcement learning. We also offer a range of pre-trained models and resources to help you get started quickly.
            </p>
            <p style={{ fontSize: '18px', color: "white"  }}>
                We are always looking for new ways to help developers build great things with AI, and we are excited to see what you create with our toolkits. Whether you are a seasoned developer or just getting started, we hope you find our toolkits helpful and fun to use.
            </p>
            <br/>
            <br/>
            <br/>
            <Button variant={"contained"} sx={{backgroundColor:'white'}}>
                <a href="/" style={{ color: 'purple', textDecoration: 'none' }}>Back to Home</a>
            </Button>
        </div>
    );
};

export default AboutMe;
