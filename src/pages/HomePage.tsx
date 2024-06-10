import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";

import NavBar from '../components/NavBar';
import ScrollbarTop from "../components/ScrollbarTop.tsx";
import Title from "../components/Title.tsx";
import Projects from "../components/portfolio/Projects.tsx";
import Footer from "../components/Footer.tsx";

const HomePage = () => {

    return (
        <div>
            <ScrollbarTop />

            <div className="bg-background m-auto w-full">
                <div className=" flex justify-center items-center">
                    <div className="xl:max-w-[1280px] w-full md:px-16 pt-6 pb-2 px-12">
                        <NavBar/>

                        <div className="flex flex-col px-32 items-center justify-start w-full mb-12">
                            <Title />

                            <div className="animate-slow-fade-in my-4">
                                <FontAwesomeIcon className="animate-bounce" icon={faCircleArrowDown} size="2x"/>
                            </div>

                            <Projects />

                        </div>

                        <Footer />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;