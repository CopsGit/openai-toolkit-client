import React from 'react';
import Layout from "../../layout/Layout";
import TextToImg from "../../components/textToImg/TextToImg";
import ImageVariation from "../../components/imgVariation/ImageVariation";
import ChatGpt from "../../components/chatTypes/ChatGpt";
import Welcome from "./Welcome";

const HomePage = () => {
    return (
        <Layout features={["Home"]}>
            <Welcome />
        </Layout>
    );
};

export default HomePage;
