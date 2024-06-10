import ProjectCard from "./ProjectCard.tsx";
import ProjectsJSON from "../../assets/ProjectsJSON.tsx";

const Projects = () => {
    return (
        <div className="flex flex-col justify-center w-full h-screen">
            <div className="flex items-start justify-start w-full p-4">
                <h1 className="font-title font-bold text-3xl">
                    Projects
                </h1>
            </div>

            <div className='grid grid-cols-2 gap-8'>
                {ProjectsJSON.map((project) => (
                    <ProjectCard title={project.title} description={project.description} tools={project.tools} />
                ))}
            </div>



        </div>
    )
}


export default Projects;