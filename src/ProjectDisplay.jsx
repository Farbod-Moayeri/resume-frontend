import React, { useState, useEffect } from 'react';
import { ProjectDisplayElement } from "./ProjectDisplayElement"

export const ProjectDisplay = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:8888/projects')
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
            <div className=" flex  bg-blueRock items-center flex-col">
                <div className="m-8">
                    <h1 className=" border-l-darkRock text-7xl">Projects</h1>
                </div>

                <div id="projectList" className=" mx-36 gap-36 grid auto-rows-fr grid-cols-2">
                {
                    projects.map((element, index) => (
                        < ProjectDisplayElement
                            key={index}
                            index={index}
                            image = {element.image}
                            title = {element.title}
                            description={element.description}
                            date={element.date}
                            link={element.link}
                            skills={element.skills}
                        />
                    )
                )}
                </div>
                
            </div>
        </>
    )
}