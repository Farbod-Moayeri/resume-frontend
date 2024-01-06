export const ProjectDisplayElement = ({index, image, title, description, date, link, skills}) => {
    const formattedDate = date.slice(0, 4);

    return (
        <>
            <a className="block" target="_blank" rel="noreferrer" href={link}>
                <div className=" rounded-none card card-side bg-base-100 h-full hover:shadow-2xl border-4 border-mountain hover:border-darkRock hover:shadow-darkRock">
                    <figure className="w-1/2"></figure>
                    <div className="card-body pb-5 w-1/2">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <p className="align-bottom">Year: {formattedDate}</p>
                        
                    </div>
                </div>
                <div className="flex flex-col" id="imageTags">
                    <div className="w-10/12">
                        <img className="object-fill h-full" src={`${import.meta.env.VITE_FETCH_API}/images/` + image} alt="ProjectImage"/> 
                    </div>
                    <div>
                    <div id="technologies" className="flex flex-wrap gap-2">
                            {skills.map((element, index) => (
                                <div key={index} className="badge badge-neutral">{element.skill}</div>
                            ))}
                        </div>  
                    </div>
                    
                </div>
            </a>
        </>
    )
}
