import React, { useState, useEffect } from 'react';
import { ProjectDisplayElement } from "./ProjectDisplayElement"

export const ProjectDisplay = () => {
    const [projects, setProjects] = useState([])
    const vite_fetch = import.meta.env.VITE_FETCH_API ?? `/api`;
    
    useEffect(() => {
        //fetch(`${import.meta.env.VITE_FETCH_API}/projects`)
        fetch(`${vite_fetch}/projects`)
        .then(response => response.json())
        .then(data => {
            setProjects(data);
        })    
        .catch((err) => {
            console.log(err);
        })
        
    }, []) // dependency array
    return (
        <>
            <div className="flex bg-blueRock items-center flex-col justify-center">
                
                <div id="projectList" className="mx-[5%]  md:gap-[7%] grid auto-rows-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-[6%]">
                {
                    projects.map((element, index) => (
                        < ProjectDisplayElement
                            key={index}
                            index={index}
                            image = {element.image}
                            title = {element.title}
                            description={element.description}
                            date={element.date}
                            site={element.site}
                            repo={element.repo}
                            skills={element.skills}
                        />
                    )
                )}
                </div>
                
            </div>
        </>
    )
}