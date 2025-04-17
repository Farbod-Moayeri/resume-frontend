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
                            <h1 className="text-white md:text-9xl text-xl font-Source font-black">Farbod</h1>
                            <h1 className="text-white md:text-7xl text-xl font-Source font-black">Moayeri</h1>
                        </div>

                        <div className="pb-2">
                            <p className="text-white text-sm md:text-4xl font-Playfair md:mr-5">Something/Something/</p>
                            <p className="text-white text-sm md:text-4xl font-Playfair md:ml-5">Something/Something</p>
                        </div>

                        <div className='hidden'>
                            <button className="font-Playfair bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-mountain rounded">
                                <a href={resume} target='blank'>Resume</a>
                            </button>
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




