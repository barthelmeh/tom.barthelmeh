import Experience from "./Experience.tsx";
import ExperiencesJSON from "../assets/ExperiencesJSON.tsx";

const Experiences = () => {
    return (
        <div className="flex flex-col w-full h-[50%] mt-20">
            <div className="flex items-start justify-start w-full py-4">
                <h1 className="font-title font-bold text-3xl">
                    Experience
                </h1>
            </div>

            <div className='divide-y divide-slate-200'>
                {ExperiencesJSON.map((experience) => (
                    <Experience key={experience.company} title={experience.title} company={experience.company} from={experience.from} to={experience.to} company_image_url={experience.company_image_url}/>
                ))}
            </div>


        </div>
    )
}


export default Experiences;