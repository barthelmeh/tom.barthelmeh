import {LinkedInURL, GithubURL, FacebookURL} from "./Links.tsx";

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 h-[50vh] mb-4">
            <span className="font-display tracking-wider text-xl md:text-2xl lg:text-5xl">
                Don't hesitate to get in contact
            </span>

            <div className="grid grid-cols-3 w-[75%] p-6 space-y-6">

                <span className="col-span-3 flex justify-center items-center font-display lg:text-xl">
                    tom.barthelmeh@gmail.com
                </span>

                <a className="lg:col-span-1 col-span-3" href={LinkedInURL} target="_blank">
                    <button className="relative animate-slide-down rounded font-display [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 lg:text-lg md:before:scale-x-0 md:before:border-b-2">
                        Linkedin
                    </button>
                </a>

                <a className="lg:col-span-1 col-span-3" href={FacebookURL} target="_blank">
                    <button className="relative animate-slide-down rounded font-display [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 lg:text-lg md:before:scale-x-0 md:before:border-b-2">
                        Facebook
                    </button>
                </a>

                <a className="lg:col-span-1 col-span-3" href={GithubURL} target="_blank">
                    <button className="relative animate-slide-down rounded font-display [animation-delay:1.5s] before:absolute before:border-black before:left-0 before:top-0 before:h-full before:w-full before:border-b before:border-text before:transition-all before:content-[''] hover:before:scale-x-100 active:before:scale-x-100 lg:text-lg md:before:scale-x-0 md:before:border-b-2">
                        Github
                    </button>
                </a>

            </div>
        </div>
    );
}


export default Contact;