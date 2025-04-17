const totalSlides = 4;

export const JobTimeLineElement = ({ index , startDate, endDate, title, details, skills, description, isOdd, isLast}) => {

    const startDateYear = startDate.slice(0, 4);
    const startDateMonth = startDate.slice(5,7);
    const startDateDay = startDate.slice(8,10)

    const endDateYear = endDate.slice(0, 4);
    const endDateMonth = endDate.slice(5,7);
    const endDateDay = endDate.slice(8,10);

    var currentIndex = index+1;

    console.log(currentIndex);

    const prevSlideIndex = currentIndex > 1 ? currentIndex - 1 : totalSlides;
    const nextSlideIndex = currentIndex < totalSlides ? currentIndex + 1 : 1;

    // currentIndex>1 ? --currentIndex : currentIndex=totalSlides
    // currentIndex<totalSlides ? ++currentIndex : currentIndex=1
    return (
        
        <>
            <div id={`slide${currentIndex}`} className="carousel-item relative w-full flex flex-col justify-center">

                {/* Flex container to center the content vertically, and align it to the left */}
                <div className="flex flex-col justify-center items-start md:ml-56 w-full">
                
                    <div title="Job Title" className="text-white text-sm md:text-8xl font-black font-Playfair md:mb-5">
                        {title}
                    </div>

                    <div title="Date" className="md:text-3xl text-white md:mb-7">
                        {startDateYear}/{startDateMonth}/{startDateDay} - {endDateYear}/{endDateMonth}/{endDateDay}
                    </div>

                    <div title="Details" className="text-white text-sm md:text-5xl md:mb-4 font-Playfair md:max-w-7xl">
                        {details}
                    </div>

                    <div title="Skills" className="text-white text-sm md:text-5xl md:mb-10 font-Playfair">
                        {skills}
                    </div>

                    <div title="Description" className="text-white text-sm md:text-5xl font-Playfair md:max-w-7xl md:pb-2">
                        {description}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${prevSlideIndex}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${nextSlideIndex}`} className="btn btn-circle">❯</a>
                    </div>

                </div>

            </div>

        </>
    )
    
};