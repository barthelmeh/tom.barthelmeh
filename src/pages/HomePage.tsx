import NavBar from '../components/NavBar';
import SkillsList from "../components/SkillsList";

const HomePage = () => {

    return (
        <div>
            <div className="bg-primary w-full overflow-hidden">
                <div className={`sm:px-16 px-6 flex justify-center items-center`}>
                    <div className={`xl:max-w-[1280px] w-full`}>
                        <NavBar />

                        <div className="flex flex-col items-center justify-start w-full mb-8">
                            <div className="flex flex-col items-center justify-center mt-16 sm:mt-18 md:mt-24">
                                <h1 className="font-display mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                                    Tom Barthelmeh
                                </h1>
                                <p className="font-display text-xl font-bold text-blue-600">a creative portfolio</p>
                            </div>
                        </div>

                        <SkillsList />

                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col items-center justify-center pt-4 md:pt-6 w-[90%] mt-12 md:mt-16 rounded-lg md:flex-row bg-blue-600">

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;