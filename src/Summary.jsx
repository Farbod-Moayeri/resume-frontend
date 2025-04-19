export const Summary = () => {
    return (
        <>
            <div className="md:mt-10 md:mb-10 min-h-fit snap-center">
                <div className="ml-[7%] md:mt-4 mt-2 md:mb-16 mb-4">
                    <h1 className="font-sans md:text-9xl text-3xl font-black">Summary</h1>
                </div>
                <div className="md:mb-20 mb-5 flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-start items-start">
                        {/* <div className="flex justify-center items-center md:max-w-6xl">
                            <div className="md:mr-4 mr-2 ml-5">
                                <img className="md:w-24 w-12 md:h-24 h-12 object-cover rounded-full outline" src="../public/senecaPolytechnic.png" alt="Seneca Polytechnic Logo" />
                            </div>
                            <div>
                                <p className="font-sans md:text-6xl text-xl md:mb-2 mb-1">Computer Programming and Analysis</p>
                                <p className="font-sans md:text-3xl">Expected Graduation 2025</p>
                            </div>
                        </div> */}
                        <div className="md:mt-10 mt-3 ml-5 md:max-w-7xl md:text-5xl">
                            <p className="font-sans text-justify">
                            During my time at Seneca Polytechnic, I built a solid foundation in programming with technologies like React, Node.js, C, C++, Python, and JavaScript. 
                            Outside of school, I took the initiative to learn Java and Selenium on my own. 
                            In my first co-op term, I gained hands-on experience with regression and sanity testing after bug fixes. 
                            I also developed a good understanding of the software development lifecycle (SDLC) and how testing fits into each phase to help ensure software quality.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}