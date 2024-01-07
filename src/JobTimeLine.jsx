import React, { useState, useEffect } from 'react';
import { JobTimeLineElement } from "./JobTimeLineElement"

export const JobTimeLine = () => {
    const [jobs, setJobs] = useState([])
    const vite_fetch = import.meta.env.VITE_FETCH_API ?? `/api`;
    useEffect(() => {
        fetch(`${vite_fetch}/jobs`)
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
            <div className="bg-darkRock min-h-fit text-neutral-50 items-center flex flex-col p-12">
                <div className=" mb-16">
                    <h1 className=" border-l-darkRock text-7xl font-serif">Timeline</h1>
                </div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {
                        jobs.map((element, index) => (
                            < JobTimeLineElement 
                                key={index}
                                index={index}
                                startDate = {element.startDate}
                                endDate = {element.endDate}
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
