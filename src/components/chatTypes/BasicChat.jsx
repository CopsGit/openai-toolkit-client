import React, {useState} from 'react';
import sendIcon from '../../assets/send.svg'
import ChatBlock from "./ChatBlock";
import '../../pages/chatpage/chatPage.scss'

const BasicChat = () => {
    const [isAi, setIsAi] = useState(false);
    const [chatData, setChatData] = useState(null);

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

    // const handleSubmit = async (e) => {
    {/*    e.preventDefault()*/}

    //     const data = new FormData(form)
    //
    //     // user's chatstripe
    {/*    chatContainer.innerHTML += chatStripe(false, data.get('prompt'))*/}

    //     // to clear the textarea input
    //     form.reset()
    //
    //     // bot's chatstripe
    //     const uniqueId = generateUniqueId()
    //     chatContainer.innerHTML += chatStripe(true, " ", uniqueId)
    //
    //     // to focus scroll to the bottom
    {/*    chatContainer.scrollTop = chatContainer.scrollHeight;*/}

    //     // specific message div
    //     const messageDiv = document.getElementById(uniqueId)
    //
    //     // messageDiv.innerHTML = "..."
    //     loader(messageDiv)
    //
    //     const response = await fetch('http://localhost:5000/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             prompt: data.get('prompt')
    //         })
    //     })
    //
    //     clearInterval(loadInterval)
    //     messageDiv.innerHTML = " "
    //
    {/*    if (response.ok) {*/}
    {/*        const data = await response.json();*/}
    {/*        const parsedData = data.bot.trim() // trims any trailing spaces/'\n'*/}
    //
    //         typeText(messageDiv, parsedData)
    //     } else {
    //         const err = await response.text()
    //
    //         messageDiv.innerHTML = "Something went wrong"
    //         alert(err)
    //     }
    // }

    return (
        <>
            {
                chatData?.map((item, index) =>
                    <ChatBlock key={index} isAi={item.isAi} value={item.value} uniqueId={item.uniqueId}/>
                )
            }
            <div id="chat_container"></div>

            <form>
                <textarea name="prompt" rows="1" cols="1" placeholder="Ask codex..."></textarea>
                <button type="submit"><img src={sendIcon} alt="send"/></button>
            </form>
        </>
    );
};

export default BasicChat;
