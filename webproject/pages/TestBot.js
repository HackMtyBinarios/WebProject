import React from 'react'
import HeaderTest from './components/HeaderTest'
import Lupa from '../Assets/lupa.svg'
import { useState } from "react";
import Image from 'next/image';

function TestBot() {
    const [questionInput, setquestionInput] = useState("");
    const [result, setResult] = useState();

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

        setResult(data.result);
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
                    <section className='flex flex-col self-end mb-12'>
                        <div className="w-200px h-52 bg-Verde-Clarito text-Negro p-5 break-all font-chivo font-regular text-sm">{result}</div>
                        <form onSubmit={onSubmit} className='flex items-center justify-center'>
                            <input
                                type="text"
                                name="pregunta"
                                placeholder="¿Con que te puedo ayudar el día de hoy?"
                                value={questionInput}
                                onChange={(e) => setquestionInput(e.target.value)}
                                className='promptInput'
                            />
                            <input type="submit" value="" className='AskButton'/>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}


export default TestBot