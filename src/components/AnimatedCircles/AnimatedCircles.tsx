import AnimatedCircle from "./AnimatedCircle.tsx";
const AnimatedCircles = () => {
    return (
        <div className='flex absolute start-32 top-[30%] items-start space-x-0.5 bg-pink'>
            <AnimatedCircle size={32} duration={7} key={1} delay={0.1}/>
            <AnimatedCircle size={64} duration={9} key={3} delay={0} />
            <AnimatedCircle size={24} duration={7} key={2} delay={0.5}/>
            <AnimatedCircle size={16} duration={6} key={1} delay={0.8}/>
        </div>
    )
}

export default AnimatedCircles