export const JobTimeLineElement = ({ index , startDate, endDate, title, description, isOdd, isLast}) => {

    const startDateYear = startDate.slice(0, 4);
    const startDateMonth = startDate.slice(5,7);
    const startDateDay = startDate.slice(8,10)


    const endDateYear = endDate.slice(0, 4);
    const endDateMonth = endDate.slice(5,7);
    const endDateDay = endDate.slice(8,10);

    return (
        <>
            <li>
                { index !== 0 &&
                    <hr/>
                }
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className={isOdd ? "timeline-start md:text-end mb-10" : "timeline-end mb-10"}>
                    <time className="font-mono italic">{startDateYear}/{startDateMonth}/{startDateDay} - {endDateYear}/{endDateMonth}/{endDateDay}</time>
                    <div className="md:text-2xl font-black text-lg font-Source">{title}</div>
                    <div className="font-Playfair text-lg">{description}</div>
                </div>
                { !isLast &&
                    <hr/>
                }
            </li>
            {/* <div>
                <div>
                    <div title="Job Title">{title}</div>
                    <div title="Date">{startDateYear}/{startDateMonth}/{startDateDay} - {endDateYear}/{endDateMonth}/{endDateDay}</div>
                </div>
                
                <div title="Details"></div>-
                <div title="Skills"></div>
                <div title="Description"></div>
            </div>                */}
        </>
    )
    
};