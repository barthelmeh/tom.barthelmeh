import {LinkedInURL, GithubURL} from "./Links.tsx";

const NavBar = () => {

    return (
        <div>
            <nav className="w-full flex justify-end navbar text-xl font-accent text-black">
                <div className="flex space-x-6 justify-between">
                    <a href={LinkedInURL} target="_blank" className="relative rounded [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 md:before:scale-x-0 md:before:border-b-2">
                        linkedin
                    </a>
                    <a href={GithubURL} target="_blank" className="relative rounded [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 md:before:scale-x-0 md:before:border-b-2">
                        github
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;