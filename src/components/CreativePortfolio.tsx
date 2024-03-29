import SlackBot from "./portfolio/SlackBot.tsx";
import MirageAI from "./portfolio/MirageAI.tsx";
import Seng365 from "./portfolio/Seng365.tsx";
import Seng302 from "./portfolio/Seng302.tsx";
import Cavotec from "./portfolio/Cavotec.tsx";
import RevealOnScroll from "./RevealOnScroll.tsx";

const CreativePortfolio = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full my-32 md:my-36">
                <div className="flex flex-row justify-start items-start w-full">
                    <RevealOnScroll>
                        <span className="font-display lg:text-4xl md:text-2xl tracking-widest mb-2 md:mb-4">Creative Portfolio</span>
                    </RevealOnScroll>
                </div>


            <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4 mt-4 md:flex-row w-full">
                    <RevealOnScroll>
                        <div className="flex items-center justify-center rounded-lg bg-gray-100 p-16 md:flex-[3]">
                            {/*SENG365*/}
                            <Seng365 />
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="flex items-center justify-center rounded-lg bg-gray-100 p-16 md:flex-[1]">
                            {/*Mirage AI*/}
                            <MirageAI />
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="flex flex-col items-center justify-center mt-4 gap-4 md:flex-row w-full">
                    <RevealOnScroll>
                        <div className="rounded-lg md:flex-[1] bg-gray-100 p-16">
                            <SlackBot />
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="flex flex-col md:flex-[3] rounded-lg bg-gray-100 p-16">
                            {/*SENG302*/}
                            <Seng302 />
                        </div>
                    </RevealOnScroll>
                </div>

                <RevealOnScroll>
                    <div className="w-full flex flex-col justify-center items-center rounded-lg mt-4 bg-gray-100 p-16">
                        {/*Cavotec*/}
                        <Cavotec />
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
}

export default CreativePortfolio;