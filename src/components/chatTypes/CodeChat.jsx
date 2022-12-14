import React, {useEffect, useRef, useState} from 'react';
import sendIcon from '../../assets/send.svg'
import ChatBlock from "./ChatBlock";
import '../../pages/chatpage/chatPage.scss'
import api from "../../utils/axiosSetting";

const CodeChat = () => {
    const [chatData, setChatData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [uniqueId, setUniqueId] = useState("");
    const chatRef = useRef(null);

    let loadInterval

    const handleLoader = (element) => {
        element.textContent = ''

        loadInterval = setInterval(() => {

            element.textContent += '.';

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

        const uniqueId = handleUid()
        setUniqueId(uniqueId)

        const newChatBot = {
            isAi: true,
            value: '...',
            uniqueId
        }

        setChatData([...chatData, newChatMan, newChatBot])

        chatRef.current.scrollTop = chatRef.current.scrollHeight
    }

    useEffect(() => {
        const fetchChat = async () => {
            // specific message div
            const messageDiv = document.getElementById(uniqueId)

            handleLoader(messageDiv)

            const response = await api.post('/chat/code', {
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
                    chatData.length === 0 &&
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        flexDirection: 'column',
                        color: '#fff',
                        gap: '1rem'
                    }}>
                        <h1>Hi, I'm a Code Chatbot!</h1>
                        <p>Ask me anything about or with your code!</p>
                        <p>
                            You can find useful examples <a href="https://www.learngpt.com/" target="_blank" rel="noreferrer" style={{textDecoration:'underline', color:'#fff'}}>HERE</a>
                        </p>
                        <p>
                            OpenAi Model: <a href="https://beta.openai.com/docs/models/codex" target="_blank" rel="noreferrer" style={{textDecoration:'underline', color:'#fff'}}>code-davinci-002</a>
                        </p>
                    </div>
                }
                {
                    chatData.length > 0 && chatData?.map((item, index) =>
                        <ChatBlock key={index} isAi={item.isAi} value={item.value} uniqueId={item.uniqueId}/>
                    )
                }
            </div>
            <form onSubmit={handleSubmit} onKeyDown={(e) => {if (e.key === 'Enter') {handleSubmit(e).then()}}}>
                <textarea
                    name="prompt"
                    rows="1"
                    cols="1"
                    placeholder="Ask codex..."
                    required
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                ></textarea>
                <button type="submit"><img src={sendIcon} alt="send"/></button>
            </form>
        </>
    );
};

export default CodeChat;
