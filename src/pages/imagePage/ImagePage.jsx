import React from 'react';
import Layout from "../../layout/Layout";
import TextToImg from "../../components/textToImg/TextToImg";

const ImagePage = () => {
    return (
        <Layout features={["Text to Image"]}>
            <TextToImg />
        </Layout>
    );
};

export default ImagePage;
