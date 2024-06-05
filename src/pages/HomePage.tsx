import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";

import NavBar from '../components/NavBar';
import CreativePortfolio from "../components/CreativePortfolio";
import Contact from "../components/Contact";
import Resume from "../storage/Tom_Barthelmeh_Resume.pdf"
import React from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";

const HomePage = () => {

    const [blending, setBlending] = React.useState(false);

    const initialCursorSize = 16;
    const blendingCursorSize = 64;
    const clickDecreaseAmount = 0.75;

    const cursorSize = useMotionValue(initialCursorSize);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 550 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const cursorSizeSpring = useSpring(cursorSize, springConfig);

    const textEnter = () => {
        setBlending(true);
        cursorSize.set(blendingCursorSize);
    }

    const textLeave = () => {
        setBlending(false);
        cursorSize.set(initialCursorSize);
    }


    React.useEffect(() => {

        const mouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - cursorSize.get()/2);
            cursorY.set(e.clientY - cursorSize.get()/2);
        }

        const mouseDown = () => {
            const prevCursorSize = cursorSize.get();
            const mouseX = cursorX.get() + prevCursorSize/2;
            const mouseY = cursorY.get() + prevCursorSize/2;
            const newCursorSize = cursorSize.get() * clickDecreaseAmount;
            cursorSize.set(newCursorSize);

            cursorX.set(mouseX - newCursorSize/2);
            cursorY.set(mouseY - newCursorSize/2);
        }
        const mouseUp = () => {
            const prevCursorSize = cursorSize.get();
            const mouseX = cursorX.get() + prevCursorSize/2;
            const mouseY = cursorY.get() + prevCursorSize/2;
            const newCursorSize = cursorSize.get() / clickDecreaseAmount;
            cursorSize.set(newCursorSize);

            cursorX.set(mouseX - newCursorSize/2);
            cursorY.set(mouseY - newCursorSize/2);
        }

        window.addEventListener("pointermove", mouseMove);
        window.addEventListener("mousedown", mouseDown);
        window.addEventListener("mouseup", mouseUp);

        return () => {
            window.removeEventListener("pointermove", mouseMove);
            window.removeEventListener("mousedown", mouseDown);
            window.removeEventListener("mouseup", mouseUp);
        }
    }, [cursorX, cursorY, cursorSize]);

    return (
        <div>
            <div>
                <motion.div
                    className={`z-20 fixed cursor ${blending ? "mix-blend-difference bg-white" : ""}`}
                    style={{
                        translateX: cursorXSpring,
                        translateY: cursorYSpring,
                        height: cursorSizeSpring,
                        width: cursorSizeSpring,
                    }}
                />
            </div>


            <div className="bg-background m-auto w-full">
                <div className=" flex justify-center items-center">
                    <div className="xl:max-w-[1280px] w-full md:px-16 py-6 px-8">
                        <NavBar/>

                        <div className="flex flex-col items-center justify-start w-full mb-16">
                            <div className="flex flex-col items-center justify-center w-full mb-24 px-4 sm:px-12">
                                <div className="flex flex-col items-center justify-center mt-16 sm:mt-18 md:mt-24">
                                    <h1 className="font-display mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-8xl bg-white" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                                        Tom Barthelmeh
                                    </h1>

                                    <p className="font-display tracking-tight text-lg">
                                        Fourth year Software Engineering student at UC
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center my-12 sm:my-14 md:my-20">
                                    <a href={Resume} download="Tom_Barthelmeh_Resume.pdf">
                                        <button
                                            className="relative animate-slide-down rounded font-bold font-display [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 md:text-lg md:before:scale-x-0 md:before:border-b-2">
                                            Download my CV
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="animate-slow-fade-in my-12 md:my-28">
                                <FontAwesomeIcon className="animate-bounce" icon={faCircleArrowDown} size="2x"/>
                            </div>

                            <div className='z-0'>
                                <CreativePortfolio/>
                            </div>

                            <div className="h-[15vh]"></div>

                            <Contact/>

                            <div className="h-[15vh]"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;