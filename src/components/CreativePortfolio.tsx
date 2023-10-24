const CreativePortfolio = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full my-32 md:my-36">
            <div className="flex flex-row justify-start items-start w-full">
                <span className="font-display lg:text-4xl md:text-2xl tracking-widest mb-2 md:mb-4">Creative Portfolio</span>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
                <div className="col-span-2 rounded-lg bg-gray-100 p-24">
                    Slack Bot
                </div>
                <div className="col-span-1 rounded-lg bg-gray-100 p-24">
                    Mirage AI
                </div>

                <div className="col-span-1 rounded-lg bg-gray-100 p-24">
                    SENG365
                </div>
                <div className="col-span-2 rounded-lg bg-gray-100 p-24">
                    SENG302
                </div>

                <div className="col-span-3 rounded-lg bg-gray-100 p-24">
                    Cavotec
                </div>
            </div>
        </div>
    );
}

export default CreativePortfolio;