import { JobTimeLineElement } from "./JobTimeLineElement"

export const JobTimeLine = () => {
    const array = [
        {
            year: "2020",
            title: "sparky",
            description: "My first job", 
        },
        {
            year: "2018",
            title: "dishwash",
            description: "My 0 job",
        }
    ]
    return (
        <>
            <div className="bg-darkRock min-h-fit text-neutral-50">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {
                        array.map((element, index) => (
                            < JobTimeLineElement 
                                key={index}
                                index={index}
                                year = {element.year}
                                title = {element.title}
                                description={element.description}
                                isOdd={(index % 2) !== 0}
                                isLast={index + 1 === array.length}
                            />
                        )
                    )}
                </ul>
            </div>
        </>
    )
}
