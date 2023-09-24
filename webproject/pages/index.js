import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Link from "next/link";
import Prueba from "../Assets/dudasImage.png"
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
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
    <div>
      <Head>
        <title>Fink</title>
        <link rel="icon" href="/money.webp" />
      </Head>

      <main>
        <Header/>
        <h3>Preguntame lo que sea</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="pregunta"
            placeholder="escribe..."
            value={questionInput}
            onChange={(e) => setquestionInput(e.target.value)}
          />
          <input type="submit" value="Respuesta" />
        </form>
        <div>{result}</div>
        <div className="section flex flex-wrap px-28 items-center">

        </div>
        <div className="section flex flex-wrap px-28 items-center">
          <section className="w-1/2 flex flex-col gap-10">
            <h4 className="font-chivo font-bold italic text-3xl ">¿Tienes Dudas?</h4>
            <h4 className="font-chivo font-bold italic text-5xl ">Vive la experiencia y ve lo que puedes lograr</h4>
            <Link href="/TestBot" className="button">Iniciar Prueba</Link>
          </section>
          <section className="w-1/2 flex flex-col gap-10 items-end">
            <Image src={Prueba} alt="Fink Logo" className="object-containt min-h-[12vh] w-52"/>
          </section>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
