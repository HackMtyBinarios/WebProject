import React from 'react'
import HeaderTest from './components/HeaderTest'
import { useState } from "react";

function Conversation({ prompt, result }) {
    return (
      <section className='flex flex-col justify-end gap-8'>
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
            <section className='w-screen h-[88vh] flex justify-center gap-5 py-12 '>
                <section className='w-[24vw] flex justify-center'>
                    <section className='w-full flex items-center bg-Verde-Clarito border-Negro border-2 p-10'>
                        <section className='h-[85%] flex flex-col justify-between items-center gap-5'>
                            <h1 className='text-Negro font-chivo italic font-bold text-2xl text-center'>Lecturas Relacionadas</h1>
                            <p className='text-Negro font-chivo italic font-medium text-sm text-center'>Nisi atque optio incidunt repudiandae et est animi quod nihil occaecati dolor ut occaecati non.</p>
                            <section className="w-full">
                                <section className='flex w-full items-end  h-40 bg-[#ffffff]  border-Negro border-2 opacity-30'>
                                    <section className='flex w-full justify-between items-center border-Negro border-t-2 p-2'>
                                        <h3 className=''>2023 Best Apps</h3>
                                        <button className='button'>Leer</button>
                                    </section>
                                </section>
                            </section>
                            <section className="w-full">
                                <section className='flex w-full items-end  h-40 bg-[#ffffff]  border-Negro border-2 opacity-30'>
                                    <section className='flex w-full justify-between items-center border-Negro border-t-2 p-2'>
                                        <h3 className=''>2023 Best Apps</h3>
                                        <button className='button'>Leer</button>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                <section className='w-fit h-[100%] flex justify-center'>
                    <section className='flex flex-col justify-end gap-10 overflow-auto'>
                        <section className='flex flex-col h-fit justify-end gap-7' id='conversations'>
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
                <section className='w-[24vw] flex justify-center'>
                    <section className='w-full flex items-center bg-Verde-Clarito border-Negro border-2 p-10'>
                        <section className='h-[85%] flex flex-col justify-between items-center gap-5'>
                            <h1 className='text-Negro font-chivo italic font-bold text-2xl text-center'>Beneficios de Descargar la APP</h1>
                            <ul className='flex flex-col gap-5'>
                                <li className='ListOption'>
                                    <span className='inline-block mr-2 align-middle'>
                                        <svg height="30" width="32" fill="none" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5 1.5H1.5V28.4008H30.5V1.5Z" fill="#9CFFDB" stroke="#000" strokeWidth="3"/>
                                        </svg>
                                    </span>
                                Todo en el mismo lugar al mismo tiempo
                                </li>
                                <li className='ListOption'>
                                <span className='inline-block mr-2 align-middle'>
                                        <svg height="30" width="32" fill="none" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5 1.5H1.5V28.4008H30.5V1.5Z" fill="#9CFFDB" stroke="#000" strokeWidth="3"/>
                                        </svg>
                                    </span>
                                    Todo en el mismo lugar al mismo tiempo</li>
                                <li className='ListOption'>
                                <span className='inline-block mr-2 align-middle'>
                                        <svg height="30" width="32" fill="none" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5 1.5H1.5V28.4008H30.5V1.5Z" fill="#9CFFDB" stroke="#000" strokeWidth="3"/>
                                        </svg>
                                    </span>
                                    Todo en el mismo lugar al mismo tiempo</li>
                                <li className='ListOption'>
                                <span className='inline-block mr-2 align-middle'>
                                        <svg height="30" width="32" fill="none" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5 1.5H1.5V28.4008H30.5V1.5Z" fill="#9CFFDB" stroke="#000" strokeWidth="3"/>
                                        </svg>
                                    </span>
                                    Todo en el mismo lugar al mismo tiempo</li>
                                <li className='ListOption'>
                                <span className='inline-block mr-2 align-middle'>
                                        <svg height="30" width="32" fill="none" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5 1.5H1.5V28.4008H30.5V1.5Z" fill="#9CFFDB" stroke="#000" strokeWidth="3"/>
                                        </svg>
                                    </span>
                                    Todo en el mismo lugar al mismo tiempo</li>
                            </ul>
                            <button className=' bg-Negro text-[#ffffff] font-chivo italic font-bold text-xl text-center p-5 rounded-full'>Get the App</button>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default TestBot