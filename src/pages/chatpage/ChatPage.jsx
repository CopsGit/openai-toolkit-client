import React from 'react';
import BasicChat from "../../components/chatTypes/BasicChat";
import Layout from "../../layout/Layout";
import './chatPage.scss'
import {useSelector} from "react-redux";
import CodeChat from "../../components/chatTypes/CodeChat";

const ChatPage = () => {
    const feature = useSelector(state => state.page.curFeature)

    const curFeature = () => {
        switch (feature) {
            case "Basic Chat":
                return <BasicChat/>
            case "Code Chat":
                return <CodeChat/>
            default:
                return <BasicChat/>
        }
    }

    return (
        <Layout features={["Basic Chat", "Code Chat"]}>
            <div id="app">
                {
                    curFeature()
                }
            </div>
        </Layout>
    );
};

export default ChatPage;
