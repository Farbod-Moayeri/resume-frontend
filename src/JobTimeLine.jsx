import React, { useState, useEffect } from 'react';
import { JobTimeLineElement } from "./JobTimeLineElement"

export const JobTimeLine = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:8888/jobs')
        .then(response => response.json())
        .then(data => {
            setJobs(data);
        })    
        .catch((err) => {
            console.log(err);
        })
        
    }, []) // dependency array
    return (
        <>
            <div className="bg-darkRock min-h-fit text-neutral-50">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {
                        jobs.map((element, index) => (
                            < JobTimeLineElement 
                                key={index}
                                index={index}
                                date = {element.date}
                                title = {element.title}
                                description={element.description}
                                isOdd={(index % 2) !== 0}
                                isLast={index + 1 === jobs.length}
                            />
                        )
                    )}
                </ul>
            </div>
        </>
    )
}
