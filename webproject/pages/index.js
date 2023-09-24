import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";

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
      </main>
    </div>
  );
}
