import AnimatedCircle from "./AnimatedCircle.tsx";
const AnimatedCircles = () => {
    return (
        <div className='flex absolute start-32 top-[30%] items-start space-x-0.5'>
            <AnimatedCircle size={128} duration={7} key={1} delay={10}/>
            <AnimatedCircle size={256} duration={8} key={3} delay={0} />
            <AnimatedCircle size={96} duration={6} key={2} delay={0.5}/>
            <AnimatedCircle size={64} duration={5} key={4} delay={0.8}/>
        </div>
    )
}

export default AnimatedCircles