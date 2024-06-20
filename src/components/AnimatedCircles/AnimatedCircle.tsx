import {motion, useMotionTemplate, useMotionValue, animate} from "framer-motion";
import React from 'react';
const COLOURS = ['#E3B6FF', '#F1C0D7', '#FFCAAF', '#61A0FF', '#DBDFC1', '#B6F3D2']

interface animatedProps {
    size: number,
    duration: number,
    delay: number
}

const AnimatedCircle = (props: animatedProps) => {
    const startColour = useMotionValue(COLOURS[0]);
    const endColour = useMotionValue(COLOURS[COLOURS.length-1])
    const background = useMotionTemplate`linear-gradient(${startColour}, ${endColour})`;
    const circleSize = `w-${props.size} h-${props.size}`
    const animationRange = [-150, 150 - props.size*4];
    console.log(animationRange);
    React.useEffect(() => {
        animate(startColour, COLOURS, {
            ease: "easeInOut",
            duration: props.duration,
            repeat: Infinity,
            repeatType: "mirror"
        });
        animate(endColour, COLOURS.map((_, index, array) =>
            array[(index + 1) % array.length]), {
            ease: "easeInOut",
            duration: props.duration,
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, [endColour, props.duration, startColour])

    return (
        <motion.div
            className={`rounded-full pointer-events-none ${circleSize}`}
            animate={{
                y: animationRange,
            }}
            style={{
                background
            }}
            transition={{
                type: "tween",
                duration: props.duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
            }}/>
    )
}

export default AnimatedCircle;