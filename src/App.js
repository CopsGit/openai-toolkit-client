import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from "./pages/homepage/HomePage";
import ChatPage from "./pages/chatpage/ChatPage";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveCurFeature, saveCurrentPage} from "./redux/slice/pageSlice";
import {Image} from "@mui/icons-material";
import ImagePage from "./pages/imagePage/ImagePage";
import AboutMe from "./pages/aboutme/AboutMe";

function App() {

    return (
        <Router>
            <Routes>
                <Route path='*' element={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: "center",
                            height: '100vh'
                        }}
                    >
                        <img style={{objectFit: "cover", width: '100%'}}
                            src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
                            alt=""/>
                    </div>
                }/>
                <Route path='/' element={<Navigate to= "/home"/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/chat' element={<ChatPage/>}/>
                <Route path='/image' element={<ImagePage/>}/>
                <Route path='/about' element={<AboutMe/>}/>
            </Routes>
        </Router>
    );
}

export default App;
