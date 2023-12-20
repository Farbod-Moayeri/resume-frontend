export const ProjectDisplayElement = ({index, image, title, description, year, link, skills}) => {
    return (
        <>
            <a className="w-2/5 m-4" target="_blank" rel="noreferrer" href={link}><div className="card card-side bg-base-100 shadow-xl ">
                <figure className="w-1/2"><img src={image} alt="ProjectImage"/></figure>
                <div className="card-body pb-5 w-1/2">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className=" align-bottom">Year: {year}</p>
                    <div id="technologies" className="flex flex-wrap gap-2">
                        {
                        skills.map((element, index) => (
                            <div key={index} className="badge badge-neutral">{element}</div>
                        )
                        )}
                    </div>
                    
                </div>
            </div></a>
        </>
    )
}