import resume from '../public/Resume.pdf'


export const ProfileHeader = () => {
    return (
        <>
            <div className="hero py-[4%] snap-center" style={{backgroundImage: 'url(./smallerRedMountain.jpg)'}}>
                
                <div className="hero-content text-neutral-content">
                    
                    <div className="max-w-md flex flex-col justify-center text-center">
                        <div class="pb-2">
                            <h1 className="md:text-4xl font-serif font-black">Software Engineer</h1>
                        </div>
                        <div className="pb-2">
                            <h1 className=" md:text-4xl text-xl font-Source font-black">Farbod Moayeri</h1>
                        </div>
                        
                        <div className="pb-2">
                            <p className="font-bold text-sm md:text-lg font-Playfair">Software Developer</p>
                            
                        </div>

                        <div>
                            <button className="font-Playfair bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-mountain rounded">
                                <a href={resume} target='blank'>Resume</a>
                            </button>
                        </div>
                        
                    </div>
                    <a href="https://www.linkedin.com/in/farbod-m-a33b64128/" target='blank'>
                        <div className="avatar">
                            <div className=" md:w-56 w-24 rounded-xl">
                                <img className="object-cover" src="./farbodMoayeri.jpg" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}




