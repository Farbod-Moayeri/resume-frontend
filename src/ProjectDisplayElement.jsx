export const ProjectDisplayElement = ({index, image, title, description, date, link, skills}) => {

    return (
        <>
            
            <a className="" target="_blank" rel="noreferrer" href={link}>
                <div className=" card card-side bg-base-100 h-full shadow-xl ">
                    <figure className="w-1/2"><img className=" object-fill h-full" src={'http://localhost:8888/images/' + image} alt="ProjectImage"/></figure>
                    <div className="card-body pb-5 w-1/2">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <p className=" align-bottom">Year: {date}</p>
                        <div id="technologies" className="flex flex-wrap gap-2">
                            {
                            skills.map((element, index) => (
                                <div key={index} className="badge badge-neutral">{element.skill}</div>
                            )
                            )}
                        </div>  
                    </div>
                </div>
                
            </a>
        </>
    )
}