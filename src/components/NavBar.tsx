import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import {LinkedInURL, GithubURL, InstagramURL} from "./Links.tsx";

const NavBar = () => {

    return (
        <div>
            <nav className="w-full flex justify-end items-center navbar">
                {/* Logo */}
                <div className="flex space-x-2">
                    { /* Icons */ }
                    <a href={LinkedInURL} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a href={GithubURL} target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href={InstagramURL} target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;