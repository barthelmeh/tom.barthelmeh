import NavBar from '../components/NavBar';
import ScrollbarTop from "../components/ScrollbarTop.tsx";
import Title from "../components/Title.tsx";
import Projects from "../components/portfolio/Projects.tsx";
import Experiences from "../components/Experiences.tsx";
import Footer from "../components/Footer.tsx";

const HomePage = () => {

    return (
        <div>
            <ScrollbarTop />

            <div className="bg-background m-auto w-full">
                <div className='flex justify-center items-center'>
                    <div className="xl:max-w-[1280px] h-full w-full md:px-32 pt-6 pb-2 px-16">
                        <NavBar/>

                        <div className="w-full mb-12">
                            <Title/>

                            <Projects/>

                            <Experiences/>
                        </div>

                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;