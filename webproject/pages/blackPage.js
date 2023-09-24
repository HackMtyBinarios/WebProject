import React from 'react';
import Image from "next/image"
import graph from "../Assets/graphs_blackpage.png"


const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;


 
