import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSlack} from "@fortawesome/free-brands-svg-icons";
const SlackBot = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="inline-flex items-baseline flex-row justify-between w-full">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faSlack} size="2x" />
                </div>
                <span className="font-display text-3xl">
                    Reviewbot
                </span>
            </div>

            <span className="font-display">
                A Slack app for generating and tagging random reviewers for an agile team
            </span>

        </div>
    )
}

export default SlackBot