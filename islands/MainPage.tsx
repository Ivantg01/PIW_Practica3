import {FunctionComponent} from "https://esm.sh/v128/preact@10.19.2/src/index.d.ts";
import {useState} from "https://esm.sh/stable/preact@10.19.2/denonext/hooks.js";
import { DataApi, JobData } from "../types.ts";
import Job from "../components/Job.tsx";

const MainPage: FunctionComponent<{ data: DataApi }> = ({ data }) => {
    const [selectedJob, setSelectedJob] = useState<JobData | null>(null);

    const selectJob = (job: JobData) => {
        setSelectedJob(job);
    };

    return (
        <div className="mainPanel">
            <div className="jobs">
                <div className="workHeader">
                    <h2>Trabajos disponibles:</h2>
                    <p>{data.data.length} resultados</p>
                </div>
                <div className="workList">
                    {data.data.map((job) => (
                        <Job
                            job={job}
                            key={job.id}
                            onSelect={() => selectJob(job)}
                            isSelected={job === selectedJob}
                        />
                    ))}
                </div>
            </div>
            <div className="inspectJob">
                {selectedJob && (
                    <div>
                        <h2>Detalles del trabajo</h2>
                        <h3>{selectedJob.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
