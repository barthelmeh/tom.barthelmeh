import React, {ReactNode} from 'react';

interface iRevealProps {
    children?: ReactNode
}

const RevealOnScroll = ({ children }: iRevealProps) => {

    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            }, { rootMargin: '0px', root: null, threshold: 0.5 }
        );
        if(ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const classes: string = `${visible ? 'animate-slow-fade-in' : 'opacity-0'}`;

    return (
        <div ref={ref} className={classes}>
            { children }
        </div>
    );
}

export default RevealOnScroll;