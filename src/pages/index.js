import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen">
      <section className="w-full h-screen bg-[#9ea29f]">
        {/* <img src="" alt="" className="absolute w-screen h-screen object-cover top-0 left-0" /> */}
        <Navbar />
      </section>
    </main>
  );
}
