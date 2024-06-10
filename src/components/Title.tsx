import Resume from "../storage/Tom_Barthelmeh_Resume.pdf";
import React from "react";
import CustomCursor from "./CustomCursor.tsx";
import WavingHand from "./WavingHand.tsx";

const Title = () => {

    const [blending, setBlending] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-full mb-24">
            {/* Hide cursor on mobile screen */}
            {window.screen.width > 768 && <CustomCursor blending={blending}/>}

            <div className="flex flex-col w-full items-start justify-start mt-20 sm:mt-24 md:mt-28">

                <h1 className="font-title mb-2 text-4xl font-extrabold leading-none tracking-tight text-black md:text-6xl lg:text-8xl"
                    onMouseEnter={() => setBlending(true)} onMouseLeave={() => setBlending(false)}>
                    Hey&nbsp;<WavingHand/>, <br/> I'm Tom.
                </h1>

                <p className="font-body tracking-tight text-2xl max-w-[70%] text-slate-500">
                    I’m currently a fourth year Software Engineering student at the University of Canterbury. I have a
                    passion in web development and solving challenging problems to produce real-world solutions.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center my-12 sm:my-14 md:my-20">
                <a href={Resume} download="Tom_Barthelmeh_Resume.pdf">
                    <button
                        className="font-body font-bold relative animate-slide-down rounded [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 md:text-lg md:before:scale-x-0 md:before:border-b-2">
                        Download my CV
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Title;