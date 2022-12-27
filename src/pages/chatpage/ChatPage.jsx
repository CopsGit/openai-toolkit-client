import React from 'react';
import BasicChat from "../../components/chatTypes/BasicChat";
import Layout from "../../layout/Layout";
import './chatPage.scss'
import {useSelector} from "react-redux";
import CodeChat from "../../components/chatTypes/CodeChat";

const ChatPage = () => {
    const feature = useSelector(state => state.page.currentPage.feature)

    console.log(feature)

    return (
        <Layout>
            <div id="app">
                {
                    feature !== 'codeChat' ? <BasicChat /> : <CodeChat />
                }
            </div>
        </Layout>
    );
};

export default ChatPage;
