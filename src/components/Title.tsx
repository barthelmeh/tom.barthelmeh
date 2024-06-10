import Resume from "../storage/Tom_Barthelmeh_Resume.pdf";
import React from "react";
import CustomCursor from "./CustomCursor.tsx";
import WavingHand from "./WavingHand.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";

const Title = () => {

    const [blending, setBlending] = React.useState(false);
    return (
        <div className="flex flex-col items-center w-full md:h-screen h-full mb-20 md:mb-0 mt-12 md:mt-20">
            {/* Hide cursor on mobile screen */}
            {window.screen.width > 768 && <CustomCursor blending={blending}/>}

            <div className="flex flex-col w-full items-start justify-start md:mt-6 mx-auto">

                <h1 className="font-title mb-2 font-extrabold leading-none tracking-tight text-black text-5xl sm:text-7xl lg:text-8xl"
                    onMouseEnter={() => setBlending(true)} onMouseLeave={() => setBlending(false)}>
                    Hey&nbsp;<WavingHand/>, <br/> I'm Tom.
                </h1>
                {/*Description for larger screens*/}
                {window.screen.width > 768 && <p className="font-body tracking-tight sm:text-lg lg:text-2xl sm:max-w-[70%] text-slate-500">
                    I’m currently a fourth year Software Engineering student at the University of Canterbury. I have a
                    passion in web development and solving challenging problems to produce real-world solutions.
                </p>}

                {/*Description for smaller screens*/}
                {window.screen.width <= 768 && <p className="font-body tracking-tight lg:text-2xl sm:max-w-[70%] text-slate-500">
                    I’m currently a 4th year SENG student at the University of Canterbury.
                </p>}
            </div>

            <div className="flex flex-col items-center justify-center my-10 xs:my-12 sm:my-14 lg:my-16">
                <a href={Resume} download="Tom_Barthelmeh_Resume.pdf">
                    <button
                        className="font-body font-bold relative animate-slide-down rounded [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 md:text-lg md:before:scale-x-0 md:before:border-b-2">
                        Download my CV
                    </button>
                </a>
            </div>

            <div className="animate-slow-fade-in mt-20 md:mt-28">
                <FontAwesomeIcon className="animate-bounce" icon={faCircleArrowDown} size="2x"/>
            </div>
        </div>
    )
}

export default Title;