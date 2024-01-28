import NavBar from '../components/NavBar';
import CreativePortfolio from "../components/CreativePortfolio";
import Contact from "../components/Contact";
import Resume from "../storage/Tom_Barthelmeh_Resume.pdf"

const HomePage = () => {

    return (
        <div>
            <div className="bg-primary w-full overflow-hidden">
                <div className=" flex justify-center items-center">
                    <div className="xl:max-w-[1280px] w-full">
                        <NavBar />

                        <div className="flex flex-col items-center justify-start w-full mb-16">
                            <div className="flex flex-col items-center justify-center w-full mb-12 px-4 sm:px-12">
                                <div className="flex flex-col items-center justify-center mt-16 sm:mt-18 md:mt-24">
                                    <h1 className="font-display mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-8xl">
                                        Tom Barthelmeh
                                    </h1>

                                    <p className="font-display tracking-tight text-lg">
                                        Software Engineering student at UC
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center my-12 sm:my-14 md:my-20">
                                    <a href={Resume} download="Tom_Barthelmeh_Resume.pdf">
                                        <button className="relative animate-slide-down rounded font-bold font-display [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 md:text-lg md:before:scale-x-0 md:before:border-b-2">
                                            Download my CV
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <CreativePortfolio />

                            <div className="h-[10vh]"></div>
                            <Contact />
                            <div className="h-[10vh]"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;