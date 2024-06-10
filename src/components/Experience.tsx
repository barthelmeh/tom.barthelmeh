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
                <h1 className='font-title text-xl font-bold'>
                    {props.title}
                </h1>
                <p>
                    {props.company}
                </p>
                <p className='text-slate-500 text-xs'>
                    {`${props.from} → ${props.to}`}
                </p>
            </div>
        </div>
    )
}

export default Experience;