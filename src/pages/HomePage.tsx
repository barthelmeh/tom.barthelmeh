import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";

import NavBar from '../components/NavBar';
import CreativePortfolio from "../components/CreativePortfolio";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import ScrollbarTop from "../components/ScrollbarTop.tsx";
import Title from "../components/Title.tsx";

const HomePage = () => {

    return (
        <div>
            <ScrollbarTop />

            <div className="bg-background m-auto w-full">
                <div className=" flex justify-center items-center">
                    <div className="xl:max-w-[1280px] w-full md:px-16 pt-6 pb-2 px-8">
                        <NavBar/>

                        <div className="flex flex-col items-center justify-start w-full mb-16">

                            <Title />

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

                        <Footer />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;