import React from 'react';
import {motion, useMotionValue, useSpring} from "framer-motion";

interface cursorProps {
    blending: boolean
}

const CustomCursor = (props: cursorProps) => {

    const initialCursorSize = 16;
    const blendingCursorSize = 64;
    const clickDecreaseAmount = 0.75;

    const cursorSize = useMotionValue(initialCursorSize);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 550 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const cursorSizeSpring = useSpring(cursorSize, springConfig);

    React.useEffect(() => {
        if(props.blending) {
            cursorSize.set(blendingCursorSize);
        } else {
            cursorSize.set(initialCursorSize);
        }
    }, [props.blending, cursorSize]);

    React.useEffect(() => {

        const mouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - cursorSize.get()/2);
            cursorY.set(e.clientY - cursorSize.get()/2);
        }

        const mouseDown = () => {
            const prevCursorSize = cursorSize.get();
            const mouseX = cursorX.get() + prevCursorSize/2;
            const mouseY = cursorY.get() + prevCursorSize/2;
            const newCursorSize = cursorSize.get() * clickDecreaseAmount;
            cursorSize.set(newCursorSize);

            cursorX.set(mouseX - newCursorSize/2);
            cursorY.set(mouseY - newCursorSize/2);
        }
        const mouseUp = () => {
            const prevCursorSize = cursorSize.get();
            const mouseX = cursorX.get() + prevCursorSize/2;
            const mouseY = cursorY.get() + prevCursorSize/2;
            const newCursorSize = cursorSize.get() / clickDecreaseAmount;
            cursorSize.set(newCursorSize);

            cursorX.set(mouseX - newCursorSize/2);
            cursorY.set(mouseY - newCursorSize/2);
        }

        window.addEventListener("pointermove", mouseMove);
        window.addEventListener("mousedown", mouseDown);
        window.addEventListener("mouseup", mouseUp);

        return () => {
            window.removeEventListener("pointermove", mouseMove);
            window.removeEventListener("mousedown", mouseDown);
            window.removeEventListener("mouseup", mouseUp);
        }
    }, [cursorX, cursorY, cursorSize]);

    return (
        <div>
            <motion.div
                className={`z-20 fixed cursor ${props.blending ? "mix-blend-difference bg-white" : ""}`}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    height: cursorSizeSpring,
                    width: cursorSizeSpring,
                }}
            />
        </div>
    )
}

export default CustomCursor;