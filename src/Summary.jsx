export const Summary = () => {
    return (
        <>
            <div className="md:mt-10 md:mb-10 min-h-fit snap-center">
                <div className="ml-[7%] md:mt-4 md:mb-20">
                    <h1 className="font-sans md:text-9xl text-3xl font-black">Summary</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-start items-start">
                        <div className="flex justify-center items-center md:max-w-6xl">
                            <div className="md:mr-4 mr-2">
                                <img className="md:w-24 w-12 md:h-24 h-12 object-cover rounded-full outline" src="../public/senecaPolytechnic.png" alt="Seneca Polytechnic Logo" />
                            </div>
                            <div>
                                <p className="font-sans md:text-6xl text-xl md:mb-2 mb-1">Computer Programming and Analysis</p>
                                <p className="font-sans md:text-3xl">Expected Graduation 2025</p>
                            </div>
                        </div>
                        <div className="md:mt-10 mt-3 md:max-w-7xl md:text-5xl">
                            <p className="font-sans">
                            Throughout my education at Seneca Polytechnic I gained programming knowledge in React, Node.Js, C, and C++ as well as Javascript.
                            On my own time I gained programming knowledge in Java and Selenium as well as Docker.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}