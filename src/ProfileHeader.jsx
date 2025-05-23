import resume from '../public/Resume.pdf'


export const ProfileHeader = () => {
    // style={{backgroundImage: 'url(./smallerRedMountain.jpg)'}}
    return (
        <>
            <div className="flex justify-center snap-center bg-black md:px-4">
                <div className="md:mb-10 mb-3 max-w-4xl flex flex-col justify-end md:mr-20 mr-5 self-center">
                    <div className="pb-2">
                        <h1 className="text-white md:text-3xl font-serif font-black">Software Engineer</h1>
                    </div>

                    <div className="pb-2 text-center">
                        <h1 className="text-white md:text-9xl text-3xl font-sans font-black whitespace-nowrap">
                            Farbod Moayeri
                        </h1>
                    </div>

                    <div className="pb-2 flex flex-col md:flex-row md:space-x-">
                        <p className="text-white text-sm md:text-4xl font-sans">Selenium/Java/React/Node.Js</p>
                    
                    </div>
                </div>

                <div className="md:ml-56 md:mb-20 md:mt-10">
                    <div className="md:w-72 w-24">
                        <img className="object-cover rounded-3xl" src="./farbodMoayeri.jpg" />
                    </div>
                </div>
            </div>

        </>
    )
}




