import ProjectCard from "./ProjectCard.tsx";
import ProjectsJSON from "../../assets/ProjectsJSON.tsx";

const Projects = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex items-start justify-start w-full py-4">
                <h1 className="font-title font-bold text-3xl">
                    Projects
                </h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 whitespace-pre-line'>
                {ProjectsJSON.map((project) => (
                    <ProjectCard key={project.title} title={project.title} description={project.description} tools={project.tools} />
                ))}
            </div>
        </div>
    )
}


export default Projects;