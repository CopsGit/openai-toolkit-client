import React from 'react';
import BasicChat from "../../components/chatTypes/BasicChat";
import Layout from "../../layout/Layout";
import './chatPage.scss'
import {useSelector} from "react-redux";
import CodeChat from "../../components/chatTypes/CodeChat";

const ChatPage = () => {
    const feature = useSelector(state => state.page.currentFeature)

    console.log(feature)

    return (
        <Layout features={["Basic Chat", "Code Chat"]}>
            <div id="app">
                {
                    feature !== 'CodeChat' ? <BasicChat /> : <CodeChat />
                }
            </div>
        </Layout>
    );
};

export default ChatPage;
