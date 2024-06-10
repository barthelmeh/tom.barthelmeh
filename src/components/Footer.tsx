import {RepositoryURL} from "./Links.tsx";
const Footer = () => {
    return (
        <div className="border-t border-slate-300 py-4 text-sm md:text-lg tracking-tight font-accent flex justify-between">
            <p>
                tom.barthelmeh@gmail.com
            </p>
            <a href={RepositoryURL} target="_blank" className="relative rounded [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 md:text-lg md:before:scale-x-0 md:before:border-b-2">
                source code
            </a>
        </div>
    )
}

export default Footer;