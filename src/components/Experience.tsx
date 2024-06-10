const Experience = (props: Experience) => {
    return (
        <div key={props.company} className='flex gap-4 py-6'>
            <img className='rounded-xl w-14 h-14'
                 loading='lazy'
                 decoding='async'
                 src={props.company_image_url}
                 alt={'Company Image'}
            />

            <div className='flex flex-col col-span-6'>
                <h1 className='font-title sm:text-xl font-bold'>
                    {props.title}
                </h1>
                <p className='text-sm sm:text-base'>
                    {props.company}
                </p>
                <p className='text-slate-500 text-[0.6rem] sm:text-xs'>
                    {`${props.from} → ${props.to}`}
                </p>
            </div>
        </div>
    )
}

export default Experience;