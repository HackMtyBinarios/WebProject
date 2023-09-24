import React from 'react'
import HeaderTest from './components/HeaderTest'
import { useState } from "react";

function Conversation({ prompt, result }) {
    return (
      <section className='flex flex-col justify-end gap-5'>
        <div className="w-full h-fit bg-Gris border-Negro border-2">
          <p className='w-[424px] text-Negro p-5 whitespace-pre-line break-words font-chivo font-regular text-sm'>{prompt}</p>
        </div>
        <div className="w-full h-fit bg-Verde-Clarito border-Negro border-2">
          <p className='w-[424px] text-Negro p-5 whitespace-pre-line break-words font-chivo font-regular text-sm'>{result}</p>
        </div>
      </section>
    );
}

function TestBot() {
    const [questionInput, setquestionInput] = useState("");
    const [conversations, setConversations] = useState([]);

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ question: questionInput }),
            });

            const data = await response.json();
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }

            const newConversation = <Conversation key={Math.random} prompt={questionInput} result={data.result} />;
            setConversations((prevConversations) => [...prevConversations, newConversation]);


            setquestionInput("");
        } catch(error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <>
            <HeaderTest/>
            <section className='w-screen h-[88vh] flex justify-center'>
                <section className='w-[50vw] flex justify-center'>
                    <section className='flex flex-col justify-end py-12 gap-10'>
                        <section className='flex flex-col justify-end gap-7 overflow-auto' id='conversations'>
                            {conversations}
                        </section>
                        <form onSubmit={onSubmit} className='flex items-center justify-center'>
                            <input
                                type="text"
                                name="pregunta"
                                placeholder="¿Con que te puedo ayudar el día de hoy?"
                                value={questionInput}
                                onChange={(e) => setquestionInput(e.target.value)}
                                autoComplete="off"
                                className='promptInput'
                            />
                                <button type="submit" value="" className='AskButton'>
                                    <span className='flex items-center w-1/2 h-1/2'>
                                        <svg height="29" width="27" fill="none" viewBox="0 0 27 29" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.779 11.921 2.121 26.578" stroke="#000" strokeWidth="6"/>
                                            <circle cx="15.428" cy="12.114" fill="#fff" r="9.571" stroke="#000" strokeWidth="4"/>
                                        </svg>
                                    </span>
                                </button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}

export default TestBot