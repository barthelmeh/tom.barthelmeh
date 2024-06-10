import ProjectPill from "./ProjectPill.tsx";

const ProjectCard = (props: ProjectType) => {
    return (
        <div className="rounded-lg shadow-md bg-slate-200 p-4 w-full flex flex-col justify-between gap-8 h-full hover:bg-slate-200/70">
            <div>
                <h1 className="font-title font-bold text-3xl">
                    {props.title}
                </h1>
                <p className="font-body text-slate-500 text-sm max-w-[75%]">
                    {props.description}
                </p>

            </div>
            <div className="flex flex-row gap-2">
                {props.tools.map((tool) => (
                    <ProjectPill text={tool} />
                ))}
            </div>
        </div>
    )
}


export default ProjectCard;