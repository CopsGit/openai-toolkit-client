import React from 'react';
import Layout from "../../layout/Layout";
import TextToImg from "../../components/textToImg/TextToImg";
import ImageVariation from "../../components/imgVariation/ImageVariation";

const HomePage = () => {
    return (
        <Layout features={["Home"]}>
            <ImageVariation />
        </Layout>
    );
};

export default HomePage;
