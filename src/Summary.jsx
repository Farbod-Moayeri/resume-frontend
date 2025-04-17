export const Summary = () => {
    return (
        <>
            <div className="md:mt-10 md:mb-10 min-h-fit snap-center">
                <div className="ml-[7%] md:mt-4 md:mb-20">
                    <h1 className="md:text-9xl text-3xl font-Source font-black">Summary</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-start items-start">
                        <div className="flex justify-center items-center md:max-w-6xl">
                            <div className="md:mr-4 mr-2">
                                <img className="md:w-24 w-12 md:h-24 h-12 object-cover rounded-full outline" src="../public/senecaPolytechnic.png" alt="Seneca Polytechnic Logo" />
                            </div>
                            <div>
                                <p className="md:text-6xl text-xl md:mb-2 mb-1">Computer Programming and Analysis</p>
                                <p className="md:text-3xl">Expected Graduation 2025</p>
                            </div>
                        </div>
                        <div className="md:mt-10 mt-3 md:max-w-7xl md:text-5xl">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed augue tellus. Morbi molestie porta tincidunt. Pellentesque lacinia metus id consequat tempor. Mauris suscipit tincidunt turpis consequat congue. Praesent ullamcorper elit neque, malesuada auctor augue semper sed.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}