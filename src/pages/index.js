import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import image from "../../public/header-image.webp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AnimatePresence>
      <main className="w-screen">
        <motion.section
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            y: {
              duration: 1.5,
              delay: 0.3,
              ease: [0.58, 0.13, 0, 1.01],
            },
          }}
          className="absolute z-[100000] w-screen h-screen bg-white top-0 left-0 grid place-items-center"
        >
          <div className="h-10 overflow-hidden">
            <motion.p
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{
                y: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              className="text-4xl font-semibold tracking-wider"
            >
              CUSTO<span className="font-normal">®</span>
            </motion.p>
          </div>
        </motion.section>
        <section className="w-full h-screen bg-[#9ea29f] xl:px-20 md:px-16 px-6 flex-col flex justify-between relative overflow-hidden">
          {/* <img src="" alt="" className="absolute w-screen h-screen object-cover top-0 left-0" /> */}
          <div>
            <Navbar />
            <div className="xl:pt-20 relative z-10">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    y: {
                      duration: 0.7,
                      delay: 0.7,
                    },
                  }}
                  className="xl:text-[77px] text-[50px] tracking-wide font-semibold text-white  xl:leading-[80px]"
                >
                  Receive the world
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    y: {
                      duration: 0.7,
                      delay: 0.7,
                    },
                  }}
                  className="xl:text-[77px] text-[50px]  font-semibold text-white xl:leading-[80px] leading-[50px] tracking-wide"
                >
                  at your doorstep
                </motion.p>
              </div>

              <div className=" h-20 xl:mt-10 mt-6 xl:w-[25rem] w-[23rem] flex flex-col justify-evenly overflow-hidden redirect-link cursor-pointer group">
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

          <div className="w-full flex items-end relative z-10 lg:pb-4 pb-8">
            <div className="flex items-center w-full justify-evenly  lg:h-[24rem] h-44">
              {Array.from("CUSTO").map((letter, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      y: {
                        duration: 1,
                        delay: 0.1 * index + 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    }}
                    className="text-white min-[1500px]:text-[24rem] min-[1600px]:text-[28rem]  min-[1200px]:text-[20rem] lg:leading-[30rem] md:text-[14rem] text-[7rem] leading-[8rem] font-bold"
                  >
                    {letter}
                  </motion.div>
                );
              })}{" "}
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "-20%" }}
                transition={{
                  y: {
                    duration: 1,
                    delay: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }}
                className="text-white lg:text-[15rem] lg:leading-[25rem] text-[3rem] font-normal -translate-y-1/4"
              >
                ®
              </motion.span>
            </div>
          </div>

          <div className="min-w-2/4 min-h-2/4  absolute left-2/4 bottom-0 -translate-x-2/4 grid place-items-center">
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1, y: "62%" }}
              transition={{
                scale: {
                  duration: 1.3,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }}
              // src={image}
              src="https://custo.io/cdn/shop/files/custo-hero_592x1234_crop_center.png?v=1669139239"
              alt=""
              className="lg:translate-y-[62%] translate-y-2/4 lg:w-[80vmin]"
            />
          </div>
        </section>
      </main>
    </AnimatePresence>
  );
}
