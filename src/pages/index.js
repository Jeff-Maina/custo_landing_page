import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen">
      <section className="w-full h-screen bg-[#9ea29f] xl:px-20 md:px-16 px-8 flex-col flex justify-between">
        {/* <img src="" alt="" className="absolute w-screen h-screen object-cover top-0 left-0" /> */}
        <div>
          <Navbar />
          <div className="xl:pt-20">
            <div>
              <p className="xl:text-[77px] text-[50px] tracking-wide font-semibold text-white  xl:leading-[80px]">
                Receive the world
              </p>
            </div>
            <div >
              <p className="xl:text-[77px] text-[50px]  font-semibold text-white xl:leading-[80px] leading-[50px] tracking-wide">
                at your doorstep
              </p>
            </div>

            <div className=" h-20 xl:mt-10 mt-6 xl:w-[30rem] w-[23rem] flex flex-col justify-evenly overflow-hidden redirect-link cursor-pointer group">
              <div className="text-white text-[27px] font-semibold flex items-center justify-between">
                <div className="flex items-center -translate-x-[40px] gap-2 group-hover:translate-x-0 transition-all ease duration-500">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      id="arrow"
                      fill="#fff"
                    >
                      <path d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-[24px]"> Discover our smart mailbox</p>
                </div>
                <div className="group-hover:translate-x-[40px] transition-all ease duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    id="arrow"
                    fill="#fff"
                  >
                    <path d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center underlines relative overflow-hidden">
                <div className="w-[30rem] h-[1px] underline-one bg-white"></div>
                <div className="w-[30rem] h-[1px] underline-two absolute bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start justify-between border">
          <span className="text-white xl:text-[28rem] md:text-[15rem] md:leading-[30rem] text-[8rem] leading-[8rem] font-bold">
            C
          </span>
          <span className="text-white xl:text-[28rem] md:text-[15rem] md:leading-[30rem] text-[8rem] leading-[8rem] font-bold">
            U
          </span>
          <span className="text-white xl:text-[28rem] md:text-[15rem] md:leading-[30rem] text-[8rem] leading-[8rem] font-bold">
            S
          </span>
          <span className="text-white xl:text-[28rem] md:text-[15rem] md:leading-[30rem] text-[8rem] leading-[8rem] font-bold">
            T
          </span>
          <span className="text-white xl:text-[28rem] md:text-[15rem] md:leading-[30rem] text-[8rem] leading-[8rem] font-bold">
            O
          </span>
          <span className="text-white lg:text-[15rem] lg:leading-[30rem] text-[3rem] font-normal -translate-y-1/4">
            ®
          </span>
        </div>
      </section>
    </main>
  );
}
