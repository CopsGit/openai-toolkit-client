import React from 'react';
import BasicChat from "../../components/chatTypes/BasicChat";
import Layout from "../../layout/Layout";
import './chatPage.scss'

const ChatPage = () => {
    return (
        <Layout>
            <div id="app">
                <BasicChat/>
            </div>
        </Layout>
    );
};

export default ChatPage;
