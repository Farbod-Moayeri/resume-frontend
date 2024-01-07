export const ProjectDisplayElement = ({ index, image, title, description, date, link, skills }) => {
    const formattedDate = date.slice(0, 4);
    const vite_fetch = import.meta.env.VITE_FETCH_API ?? `/api`;
    return (
        <>
            <div className="relative block">
                <a className=" " target="_blank" rel="noreferrer" href={link}>
                    <div className="w-full h-5/6 relative z-0">
                        <img className="object-fill h-full w-full rounded-3xl" src={`${vite_fetch}/images/` + image} alt="ProjectImage"/> 
                    </div>
                </a>
                
                <a className="" target="_blank" rel="noreferrer" href={link}>
                    <div className="bg-white absolute bottom-8 left-8 w-full h-5/6 p-4 z-0 rounded-3xl hidden">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                    </div>
                </a>
                
                <a className="" target="_blank" rel="noreferrer" href={link}>
                    <div className=" bg-white absolute bottom-8 left-8 w-full h-5/6 p-4 z-0 rounded-3xl flex align-bottom">
                        <p className="hidden">Year: {formattedDate}</p>
                        <div id="technologies" className="flex flex-wrap gap-2">
                            {skills.map((element, index) => (
                                <div key={index} className="badge badge-neutral">{element.skill}</div>
                            ))}
                        </div>  
                    </div>
                </a>
                
            </div>
            
        </>
    );
}
