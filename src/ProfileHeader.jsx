import resume from '../public/Resume.pdf'


export const ProfileHeader = () => {
    return (
        <>
            <div className="hero py-[4%]" style={{backgroundImage: 'url(./smallerRedMountain.jpg)'}}>
                
                <div className="hero-content text-center text-neutral-content">
                    <a href="https://www.linkedin.com/in/farbod-m-a33b64128/" target='blank'>
                        <div className="avatar">
                            <div className=" md:w-44 w-28 rounded-xl">
                                <img className="object-cover" src="./farbodMoayeri.jpg" />
                            </div>
                        </div>
                    </a>
                    <div className="max-w-md text-left flex flex-col justify-between">
                        <h1 className=" md:text-5xl text-2xl font-Source font-black">Farbod Moayeri</h1>
                        <div className="">
                            <p className="font-bold text-sm md:text-lg font-Playfair">Software Developer</p>
                            <button className="font-Playfair bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-mountain rounded">
                                <a href={resume} target='blank'>Resume</a>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}




