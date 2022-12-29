import axios from "axios";
import {useState} from "react";
import api from "../../utils/axiosSetting";
import FormData from 'form-data';

const ImageVariation = () => {
    const [res, setRes] = useState(null);

    const handleSubmit = async e => {

        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the selected file from the '<input>' element
        let file = document.getElementById("file").files[0];

        const reader = new FileReader();

        // Set the 'onload' event handler for the 'FileReader' instance
        reader.onload = async () => {
            // Get the image data from the 'result' property of the 'FileReader' instance
            const imageData = reader.result;

            // Convert the image data to a 'Buffer' object
            const imageBuffer = Buffer.from(imageData);

            // Set the 'Buffer' object as the value of the 'imageData' state variable
            const response = await api.post('/text/imgEdit', {
                image: imageBuffer
            })

            setRes(response.data);
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" id='file' accept="image/*"/>
                <button type="submit">Upload Image</button>
            </form>
            {res && <p>
                {res}
            </p>}
        </>
    );
};

export default ImageVariation;
