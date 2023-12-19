import { ProjectDisplayElement } from "./ProjectDisplayElement"

export const ProjectDisplay = () => {
    const array = [
        {
            image: "https://steamuserimages-a.akamaihd.net/ugc/1822265814192889849/8C2AA808C1607CFA78A5E60A6E0EEB79C0281925/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            title: "Kingdom Death: Monster 1.6 + CCG",
            description: "A fork of a popular tabletop simulator game", 
            year: 2020,
            link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2672585904",
            skills: ["C++", "Java", "NoSQL", "C#", "CSS", "Javascript", "Runescape"]
        },
        {
            image: "https://steamuserimages-a.akamaihd.net/ugc/1822265814192889849/8C2AA808C1607CFA78A5E60A6E0EEB79C0281925/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            title: "Kingdom Death: Monster 1.6 + CCG",
            description: "A fork of a popular tabletop simulator game", 
            year: 2020,
            link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2672585904",
            skills: ["C++", "Java", "NoSQL", "C#", "CSS", "Javascript", "Runescape"]
        },
        {
            image: "https://steamuserimages-a.akamaihd.net/ugc/1822265814192889849/8C2AA808C1607CFA78A5E60A6E0EEB79C0281925/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            title: "Kingdom Death: Monster 1.6 + CCG",
            description: "A fork of a popular tabletop simulator game", 
            year: 2020,
            link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2672585904",
            skills: ["C++", "Java", "NoSQL", "C#", "CSS", "Javascript", "Runescape"]
        }
    ]
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