import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Link from "next/link";
import Prueba from "../Assets/dudasImage.png"
import Footer from "./components/Footer";
import Image from "next/image";
import graph from "../Assets/graphs_blackpage.png"
import consul from "../Assets/consultor.png"


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
          <section className="w-1/2 flex flex-col gap-10 items-start">
            <Image src={consul} alt="graphs" className="object-containt min-h-50 w-[300px]"/>
          </section>
          <section className="w-1/2 flex flex-col gap-10">
            <section className="flex flex-col gap-2">
              <h4 className="font-chivo font-bold italic text-4xl text-right">Tu consultor personal</h4>
              <h4 className="font-chivo font-bold italic text-4xl text-right">portatil</h4>
            </section>
          <h4 className="font-chivo font-bold text-1xl text-right">Reprehenderit voluptatum quibusdam debitis qui nesciunt animi aut quo quae pariatur impedit. Dolores sint illo distinctio deleniti dolore. Qui quia est rerum quis natus odit eligendi doloribus accusamus aut eum eum velit est ut. Non non qui debitis aliquam neque perferendis impedit velit enim quis rerum ut eaque fugiat. Laudantium qui nisi magni repellendus laboriosam accusamus modi nemo. Dignissimos ut vero non voluptatum ab sunt qui quod.</h4>
          </section>
        </div>
        <div className="section flex flex-wrap px-28 items-center bg-Negro"> 
          <section className="w-1/2 flex flex-col gap-10">
            <section className="flex gap-2 items-baseline">
            <h4 className="font-chivo font-bold italic text-4xl text-[#ffffff]">INVERTIR</h4>
            <h4 className="font-chivo font-bold italic text-4xl text-[#ffffff]">con un</h4>
            <h4 className="font-chivo font-extrabold italic text-5xl text-[#ffffff]">CLICK</h4>
            </section>
          <h4 className="font-chivo font-bold text-1xl text-[#ffffff]">Reprehenderit voluptatum quibusdam debitis qui nesciunt animi aut quo quae pariatur impedit. Dolores sint illo distinctio deleniti dolore. Qui quia est rerum quis natus odit eligendi doloribus accusamus aut eum eum velit est ut. Non non qui debitis aliquam neque perferendis impedit velit enim quis rerum ut eaque fugiat. Laudantium qui nisi magni repellendus laboriosam accusamus modi nemo. Dignissimos ut vero non voluptatum ab sunt qui quod.</h4>
          </section>

          <section className="w-1/2 flex flex-col gap-10 items-end">
            <Image src={graph} alt="graphs" className="object-containt min-h-50 w-[400px]"/>
          </section>
        </div>

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
