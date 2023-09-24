import React from 'react';
import Image from "next/image"
import consul from "../Assets/consultor.png"


const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;


 