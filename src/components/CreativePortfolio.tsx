import SlackBot from "./SlackBot";
import MirageAI from "./MirageAI.tsx";

const CreativePortfolio = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full my-32 md:my-36">
            <div className="flex flex-row justify-start items-start w-full">
                <span className="font-display lg:text-4xl md:text-2xl tracking-widest mb-2 md:mb-4">Creative Portfolio</span>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4 mt-4 md:flex-row w-full">
                    <div className="flex items-center justify-center rounded-lg bg-gray-100 p-24 md:flex-[3]">
                        {/*SENG365*/}
                        Coming soon
                    </div>

                    <div className="flex items-center justify-center rounded-lg bg-gray-100 p-24 md:flex-[1]">
                        {/*Mirage AI*/}
                        <MirageAI />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-4 gap-4 md:flex-row w-full">
                    <div className="rounded-lg md:flex-[1] bg-gray-100 p-24">
                        <SlackBot />
                    </div>
                    <div className="flex flex-col md:flex-[3] rounded-lg bg-gray-100 p-24">
                        {/*SENG302*/}
                        Coming soon
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center rounded-lg mt-12 bg-gray-100 p-24">
                    {/*Cavotec*/}
                    Coming soon
                </div>
            </div>
        </div>
    );
}

export default CreativePortfolio;