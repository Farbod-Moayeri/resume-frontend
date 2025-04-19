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

    // <div id='Experience' className=" bg-green-950 min-h-fit text-neutral-50 items-center flex flex-col pt-[4%] pb-[3%] px-[4%] snap-center">

    //             <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"></ul>
    return (
        <>
            
            <div id='Experience' className='bg-black md:py-4 py-5 snap-center  text-neutral-50 md:pb-10'>
                <div className="ml-[7%] md:mt-4 md:mb-20 mb-5">
                    <h1 className="md:text-9xl text-3xl font-sans font-black">Experience</h1>
                </div>
                <div className="carousel w-full">

                    {
                        jobs.map((element, index) => (
                            < JobTimeLineElement 
                                key={index}
                                index={index}
                                startDate = {element.startDate}
                                endDate = {element.endDate}
                                title = {element.title}
                                details = {element.details}
                                skills = {element.skills}
                                description={element.description}
                                isOdd={(index % 2) !== 0}
                                isLast={index + 1 === jobs.length}
                            />
                        )
                    )}
                    
                </div>
            </div>
        </>
    )
}
