export const ProjectDisplayElement = ({ index, image, title, description, date, link, skills }) => {
    const formattedDate = date.slice(0, 4);
    const vite_fetch = import.meta.env.VITE_FETCH_API ?? `/api`;
    return (
        <>

            <div className="2xl:hidden">
                <div className="block">

                    <a className="" target="_blank" rel="noreferrer" href={link}>
                        <div className="w-full mb-2">
                            <img className="object-fill w-full h-48 rounded-3xl transition-opacity duration-300 md:hover:opacity-20" src={`${vite_fetch}/images/` + image} alt="ProjectImage"/> 
                        </div>
                    </a>
                    
                    <a className="" target="_blank" rel="noreferrer" href={link}>
                        <div className="bg-slate-200 w-full p-4 rounded-3xl flex flex-col justify-between">
                            <div>
                                <h2 className="font-Source font-bold text-xl">{title}</h2>
                                <p className="font-Playfair text-sm md:text-base">{description}</p>
                            </div>
                            
                            <div id="technologies" className="flex flex-wrap gap-1 mt-4">
                                {skills.map((element, index) => (
                                    <div key={index} className="badge badge-neutral text-xs">{element.skill}</div>
                                ))}
                            </div>
                            <p className="hidden p-4">{formattedDate}</p>
                        </div>
                    </a>
                    
                </div>
            </div>                  

            
            
            <div className="relative hidden 2xl:block">
                
                <a className="" target="_blank" rel="noreferrer" href={link}>
                    <div className="w-full h-5/6 relative z-10">
                        <img className="object-fill h-full w-full rounded-3xl transition-opacity duration-300 hover:opacity-20 " src={`${vite_fetch}/images/` + image} alt="ProjectImage"/> 
                    </div>
                </a>
                
                
                <a className="" target="_blank" rel="noreferrer" href={link}>
                    <div className=" bg-slate-200 absolute bottom-[4%] left-[4%]  w-full h-5/6 p-[2%] z-0 rounded-3xl flex flex-col justify-between">
                        <div>
                            <h2 className="font-Source font-bold text-3xl">{title}</h2>
                            <p className=" font-Playfair">{description}</p>
                        </div>
                        
                        <div id="technologies" className="flex flex-wrap gap-2">
                            {skills.map((element, index) => (
                                <div key={index} className="badge badge-neutral">{element.skill}</div>
                            ))}
                        </div>
                        <p className="p-4 hidden">{formattedDate}</p>
                    </div>
                </a>
                
            </div>
            
            
        </>
    );
}
