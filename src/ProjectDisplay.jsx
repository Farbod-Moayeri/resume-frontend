import { ProjectDisplayElement } from "./ProjectDisplayElement"

export const ProjectDisplay = () => {
    const [projects, setProjects] = useState([])
    const setProjects = (e) => {
        
    }
    console.log(userName);
    useEffect(() => {
        fetch('localhost:4444/projects')
        .then((data) => {
            
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

                <div id="projectList" className="flex gap-8 justify-center flex-wrap">
                {
                    array.map((element, index) => (
                        < ProjectDisplayElement
                            key={index}
                            index={index}
                            image = {element.image}
                            title = {element.title}
                            description={element.description}
                            year={element.year}
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