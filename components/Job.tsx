import { FunctionComponent} from "preact";
import {JobData } from "../types.ts";

type JobProps = {
    job: JobData;
    onSelect: () => void;
}

const img = "deno.png";

const Job: FunctionComponent<JobProps> = ({ job, onSelect}) => {
    return (
        <div class="JobContainer">
            <button onClick={(e) => {
                e.preventDefault();
                onSelect();
            }}>
                <div>
                    <img src={img} height={75} alt="Job Image" />
                </div>
                <div className="textJob">
                    <h3>{job.title}</h3>
                    <p>{job.location}</p>
                </div>
            </button>
        </div>
    );
};

export default Job;
