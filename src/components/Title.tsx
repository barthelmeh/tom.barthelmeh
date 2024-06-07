import Resume from "../storage/Tom_Barthelmeh_Resume.pdf";
import React from "react";
import CustomCursor from "./CustomCursor.tsx";

const Title = () => {

    const [blending, setBlending] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-full mb-24 px-4 sm:px-12">
            {/* Hide cursor on mobile screen */}
            {window.screen.width > 768 && <CustomCursor blending={blending} />}

            <div className="flex flex-col items-center justify-center mt-16 sm:mt-18 md:mt-24">
                <h1 className="font-display mb-2 text-4xl font-extrabold leading-none tracking-tight text-black md:text-6xl lg:text-8xl bg-white"
                    onMouseEnter={() => setBlending(true)} onMouseLeave={() => setBlending(false)}>
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
    )
}

export default Title;