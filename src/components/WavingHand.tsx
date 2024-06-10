import {motion} from "framer-motion";
const WavingHand = () => {

    return (
        <motion.span
            style={{
                originY: "70%",
                originX: "70%",
                display: "inline-block",
            }}
            animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.85],
                repeatDelay: 1,
                repeat: Infinity
            }}
        >
            👋
        </motion.span>
    )

}

export default WavingHand;