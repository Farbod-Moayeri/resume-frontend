export const ProjectDisplayElement = ({ index, image, title, description, date, site, repo, skills }) => {
    const formattedDate = date.slice(0, 4);
    const vite_fetch = import.meta.env.VITE_FETCH_API ?? `/api`;
    return (

        <>

            <div className="flex flex-col mb-[6%]">
                
                <div className="w-full">
                    <img className="object-fill w-auto h-72 rounded-t-3xl" src={`${vite_fetch}/images/` + image} alt="ProjectImage"/> 
                </div>
                
                
                <div className="bg-slate-200 w-auto h-80 p-4 rounded-b-3xl flex flex-col justify-between">
                    
                    {/* <div id="technologies" className="flex flex-wrap gap-2">
                        {skills.map((element, index) => (
                            <div key={index} className="badge badge-neutral text-sm">{element.skill}</div>
                        ))}
                    </div> */}
                    
                    <div>
                        <div className="flex">
                            <h2 className="font-Source font-bold text-xl">{title}</h2>
                            <div id="technologies" className="flex flex-wrap gap-2">
                                
                                {skills.slice(0,3).map((element, index) => (
                                    <div key={index} className="badge badge-neutral text-sm">{element.skill}</div>
                                ))} 

                            </div>
                        </div>
                        
                        <p className="font-Playfair text-base">{description}</p>
                    </div>

                    <div className="flex justify-evenly flex-row">
                        { site != '' &&
                            <a href={site}><button className="btn bg-neutral-500">Site</button></a>
                        }
                        { repo != '' &&
                            <a href={repo}><button className="btn btn-success">Repository</button></a>
                        }

                    </div>

                    <p className="hidden p-4">{formattedDate}</p>
                </div>
                
            </div>                              
        </>
    );
}
