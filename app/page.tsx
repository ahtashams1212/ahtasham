import Button from "@/Components/Button";
import Image from "next/image";
import aa from "../../public/a.jpg";
import ahtasham from "../../public/ahtasham.jpg"

import { M_PLUS_Rounded_1c } from "next/font/google";

const array = [1,2,3,4,5,6,7]

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <Image src={ahtasham} width={300} height={200} alt={""} className="border-2 border-white-500 square-3xl "></Image>
      <h1 className="font-bold text-6xl text-red-700">
      MY NAME IS AHTASHAM SHAFIQUE
      </h1>
      
      <p>
        I am Student of DAE In AUTOMOTIVE & AUTO MOBILE
      </p>
      <Image src={aa} width={300} height={200} alt={""} className="border-4 border-green-300 rounded-3xl items-start"></Image>
      <p>
        I am a youngest typescript,Nextjs,react.js,Html,Javarscipt,python,talwindcss,shadcn/ui Developer.
        And expert in AI,Metaverse,Web2.O,Web3.O expert.
        And I am a Graphic Designer,logo designer,digital marketer, Social Media Marketer.
      </p>
      
      <div>
      <div>
      <Button href="https://www.instagram.com/ahtashamshafiqu/">Instagram</Button>
    </div>
      </div>
    </main>
  );
}