const ProjectPill = ({text}: {text: string}) => {
    return (
        <div className='rounded-full bg-black text-white font-bold flex text-xs justify-center items-center px-4 py-0.5'>
            {text}
        </div>
    )
}

export default ProjectPill;