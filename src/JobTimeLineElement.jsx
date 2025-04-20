const totalSlides = 4;

export const JobTimeLineElement = ({ index , startDate, endDate, title, details, skills, description, isOdd, isLast}) => {

    // const startDateYear = startDate.slice(0, 4);
    // const startDateMonth = startDate.slice(5,7);
    // const startDateDay = startDate.slice(8,10)

    // const endDateYear = endDate.slice(0, 4);
    // const endDateMonth = endDate.slice(5,7);
    // const endDateDay = endDate.slice(8,10);

    // var currentIndex = index+1;

    // console.log(currentIndex);

    // const prevSlideIndex = currentIndex > 1 ? currentIndex - 1 : totalSlides;
    // const nextSlideIndex = currentIndex < totalSlides ? currentIndex + 1 : 1;

    // currentIndex>1 ? --currentIndex : currentIndex=totalSlides
    // currentIndex<totalSlides ? ++currentIndex : currentIndex=1
    return (
        
        <>
            <div id="slide0" className="carousel-item relative w-full flex flex-col justify-center">
    <div className="flex flex-col justify-center items-start md:ml-56 ml-5 w-full">
        <div title="Job Title" className="font-sans text-blue-300 text-sm md:text-8xl font-black md:mb-5">
            Jr Software Engineering Co-op
        </div>
        <div title="Date" className="font-sans md:text-3xl  md:mb-7">
            2024/04/06 - 2024/12/27
        </div>
        <div title="Details" className="text-white text-sm md:text-5xl md:mb-4 font-sans md:max-w-7xl">
            Ministry of Children, Community and Social Services
        </div>
        <div title="Skills" className="text-white text-sm md:text-5xl md:mb-10 font-sans">
            Testing/Selenium/Java
        </div>
        <div title="Description" className="text-white text-sm md:text-5xl font-sans md:max-w-7xl md:pb-2 text-justify">
            Gained hands-on experience in both regression and sanity testing, and contributed to the development of automation scripts using the Selenium framework integrated with Cucumber.
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
</div>

<div id="slide1" className="carousel-item relative w-full flex flex-col justify-center">
    <div className="flex flex-col justify-center items-start md:ml-56 ml-5 w-full">
        <div title="Job Title" className="font-sans text-blue-300 text-sm md:text-8xl font-black md:mb-5">
            Student at Seneca Polytechnic
        </div>
        <div title="Date" className="font-sans md:text-3xl  md:mb-7">
            2023/01/01 - 2026/01/01
        </div>
        <div title="Details" className="text-white text-sm md:text-5xl md:mb-4 font-sans md:max-w-7xl">
            Computer Programming and Analysis
        </div>
        <div title="Skills" className="text-white text-sm md:text-5xl md:mb-10 font-sans">
            C/C++/Web Development
        </div>
        <div title="Description" className="text-white text-sm md:text-5xl font-sans md:max-w-7xl md:pb-2 text-justify">
            I enrolled in Seneca Polytechnic to become a software developer because I realized I had a passion for it; A passion for planning out large projects and a passion for developing them.
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide0" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>
</div>

<div id="slide2" className="carousel-item relative w-full flex flex-col justify-center">
    <div className="flex flex-col justify-center items-start md:ml-56 ml-5 w-full">
        <div title="Job Title" className="font-sans text-blue-300 text-sm md:text-8xl font-black md:mb-5">
            Apprentice Electrician
        </div>
        <div title="Date" className="font-sans md:text-3xl  md:mb-7">
            2022/06/19 - 2023/01/01
        </div>
        <div title="Details" className="text-white text-sm md:text-5xl md:mb-4 font-sans md:max-w-7xl">
            Hillview Electric
        </div>
        <div title="Skills" className="text-white text-sm md:text-5xl md:mb-10 font-sans">
            Troubleshooting/Testing/Labeling
        </div>
        <div title="Description" className="text-white text-sm md:text-5xl font-sans md:max-w-7xl md:pb-2 text-justify">
            Collaborated with senior electricians to ensure accurate placement and alignment of components according to project specifications. Effectively communicated and coordinated with team members to streamline tasks, enhance productivity, and complete projects on schedule.
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
</div>

<div id="slide3" className="carousel-item relative w-full flex flex-col justify-center">
    <div className="flex flex-col justify-center items-start md:ml-56 ml-5 w-full">
        <div title="Job Title" className="font-sans text-blue-300 text-sm md:text-8xl font-black md:mb-5">
            Apprentice Electrician
        </div>
        <div title="Date" className="font-sans md:text-3xl  md:mb-7">
            2018/08/01 - 2022/06/1
        </div>
        <div title="Details" className="text-white text-sm md:text-5xl md:mb-4 font-sans md:max-w-7xl">
            Vesta Electric
        </div>
        <div title="Skills" className="text-white text-sm md:text-5xl md:mb-10 font-sans">
            Wiring/Measuring/Installing
        </div>
        <div title="Description" className="text-white text-sm md:text-5xl font-sans md:max-w-7xl md:pb-2 text-justify">
            Gained practical experience in installing, repairing, and maintaining electrical systems under the guidance of experienced electricians. Developed proficiency in reading and interpreting electrical blueprints, schematic diagrams, and technical specifications.
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide0" className="btn btn-circle">❯</a>
        </div>
    </div>
</div>


        </>
    )
    
};