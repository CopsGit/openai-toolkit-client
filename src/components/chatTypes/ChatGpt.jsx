import React, {useEffect, useRef, useState} from 'react';
import sendIcon from '../../assets/send.svg'
import ChatBlock from "./ChatBlock";
import '../../pages/chatpage/chatPage.scss'
import api from "../../utils/axiosSetting";
// import { ChatGPTAPIBrowser } from 'chatgpt'

const ChatGpt = () => {
    const [chatData, setChatData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [uniqueId, setUniqueId] = useState("");
    const chatRef = useRef(null);

    let loadInterval

    const handleLoader = (element) => {
        element.textContent = ''

        loadInterval = setInterval(() => {
            // Update the text content of the loading indicator
            element.textContent += '.';

            // If the loading indicator has reached three dots, reset it
            if (element.textContent === '....') {
                element.textContent = '';
            }
        }, 300);
    }

    const handleTypeResponse = (element, text) => {
        let index = 0

        let interval = setInterval(() => {
            if (index < text.length) {
                element.innerHTML += text.charAt(index)
                index++
            } else {
                clearInterval(interval)
            }
        }, 20)
    }

    const handleUid = () => {
        const timestamp = Date.now();
        const randomNumber = Math.random();
        const hexadecimalString = randomNumber.toString(16);

        return `id-${timestamp}-${hexadecimalString}`;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newChatMan =  {
            isAi: false,
            value: inputValue,
            uniqueId: handleUid()
        }

        // bot's chatstripe
        const uniqueId = handleUid()
        setUniqueId(uniqueId)

        const newChatBot = {
            isAi: true,
            value: '...',
            uniqueId
        }

        setChatData([...chatData, newChatMan, newChatBot])

        // to focus scroll to the bottom
        chatRef.current.scrollTop = chatRef.current.scrollHeight
    }

    useEffect(() => {
        const fetchChat = async () => {
            // specific message div
            const messageDiv = document.getElementById(uniqueId)

            handleLoader(messageDiv)

            const response = await api.post('/chat', {
                prompt: inputValue
            })

            clearInterval(loadInterval)
            messageDiv.innerHTML = " "

            // to clear the textarea input
            setInputValue('')

            if (response.status === 200) {
                const data = await response.data;
                const parsedData = data?.bot.trim() // trims any trailing spaces/'\n'

                handleTypeResponse(messageDiv, parsedData)
            } else {
                const err = await response.data;

                messageDiv.innerHTML = "Something went wrong"
                alert(err)
            }
        }

        if (uniqueId) {
            fetchChat().then()
        }
    }, [chatData]);


    return (
        <>
            <div id="chat_container" ref={chatRef}>
                {
                    chatData?.map((item, index) =>
                        <ChatBlock key={index} isAi={item.isAi} value={item.value} uniqueId={item.uniqueId}/>
                    )
                }
            </div>
            <form onSubmit={handleSubmit} onKeyDown={(e) => {if (e.key === 'Enter') {handleSubmit(e).then()}}}>
                <textarea
                    name="prompt"
                    rows="1"
                    cols="1"
                    placeholder="Ask davinci..."
                    required
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                ></textarea>
                <button type="submit"><img src={sendIcon} alt="send"/></button>
            </form>
        </>
    );
};

export default ChatGpt;
