import resume from '../public/Resume.pdf'


export const ProfileHeader = () => {
    // style={{backgroundImage: 'url(./smallerRedMountain.jpg)'}}
    return (
        <>
            <div className="flex flex-row justify-center snap-center bg-black" >
                
                <div className="md:mb-10 max-w-md flex flex-col justify-end md:mr-20 self-center">

                    <div className="pb-2">
                        <h1 className=" text-white md:text-3xl font-serif font-black">Software Engineer</h1>
                    </div>

                    <div className='flex flex-col justify-center text-center'>
                        <div className="pb-2">
                            <h1 className="text-white md:text-9xl text-xl font-sans font-black">Farbod</h1>
                            <h1 className="text-white md:text-7xl text-xl font-sans font-black">Moayeri</h1>
                        </div>

                        <div className="pb-2">
                            <p className="text-white text-sm md:text-4xl font-sans md:mr-5">Selenium/Java</p>
                            <p className="text-white text-sm md:text-4xl font-sans md:ml-5">React/Node.Js</p>
                        </div>

                    
                    </div>
                    
                    
                </div>
                <div className='md:ml-10 md:mb-10 md:mt-10'>
                    
                    <div className="">
                        <div className="md:w-96 w-24 rounded-xl">
                            <img className="object-cover" src="./farbodMoayeri.jpg" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}




