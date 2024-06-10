import {motion, useScroll, useTransform} from "framer-motion";
const ScrollbarTop = () => {

    const {scrollYProgress} = useScroll();

    const background = useTransform(
        scrollYProgress,
        [0, 1],
        ["#E3B6FF", "#61A0FF"]
    );

    return (
        <motion.div
            className='fixed left-1/2 top-0 z-20 w-screen h-4 bg-indigo-500 opacity-85'
            style={{
                scaleX: scrollYProgress,
                background,
                x: "-50%",
                y: "-50%"
            }}
        />
    )
}

export default ScrollbarTop;