export const ProjectDisplayElement = ({ index, image, title, description, date, link, skills }) => {
    const formattedDate = date.slice(0, 4);
    const vite_fetch = import.meta.env.VITE_FETCH_API ?? `/api`;
    return (
        <>

            <div className="lg:hidden">
                <div className="block">

                    <a className="" target="_self" rel="noreferrer" href={link}>
                        <div className="w-full mb-2">
                            <img className="object-fill w-full h-48 rounded-3xl transition-opacity duration-300 md:hover:opacity-0" src={`${vite_fetch}/images/` + image} alt="ProjectImage"/> 
                        </div>
                    </a>
                    
                    <a className="" target="_self" rel="noreferrer" href={link}>
                        <div className="bg-slate-200 w-full p-4 rounded-3xl flex flex-col justify-between">
                            <div>
                                <h2 className="font-Source font-bold text-xl">{title}</h2>
                                <p className="font-Playfair text-sm md:text-base">{description}</p>
                            </div>
                            
                            <div id="technologies" className="flex flex-wrap gap-1 mt-1">
                                {skills.map((element, index) => (
                                    <div key={index} className="badge badge-neutral text-sm">{element.skill}</div>
                                ))}
                            </div>
                            <p className="hidden p-4">{formattedDate}</p>
                        </div>
                    </a>
                    
                </div>
            </div>                  

            
            
            <div className="relative hidden lg:block">
                
                <a className="" target="_blank" rel="noreferrer" href={link}>
                    <div className="w-full h-5/6 relative z-10">
                        <img className="object-fill h-full w-full rounded-3xl transition-opacity duration-300 hover:opacity-0 " src={`${vite_fetch}/images/` + image} alt="ProjectImage"/> 
                    </div>
                </a>
                
                
                <a className="" target="_blank" rel="noreferrer" href={link}>
                    <div className=" bg-slate-200 absolute bottom-[1%] left-[4%] xl:bottom-[4%]  w-full h-5/6 px-[3.4%] py-[1.3%] xl:py-[1.5%] xl:px-[3.7%] z-0 rounded-3xl flex flex-col justify-between">
                        <div>
                            <h2 className="font-Source font-bold text-3xl">{title}</h2>
                            <p className=" font-Playfair">{description}</p>
                        </div>
                        
                        <div id="technologies" className="flex flex-wrap gap-2 lg:gap-[0.3rem]">
                            {skills.map((element, index) => (
                                <div key={index} className=" badge badge-neutral text-sm">{element.skill}</div>
                            ))}
                        </div>
                        <p className="p-4 hidden">{formattedDate}</p>
                    </div>
                </a>
                
            </div>
            
            
        </>
    );
}
