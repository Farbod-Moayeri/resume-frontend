import resume from '../public/Resume.pdf'


export const ProfileHeader = () => {
    return (
        <>
            <div className="hero" style={{backgroundImage: 'url(./smallerRedMountain.jpg)'}}>
                
                <div className="hero-content text-center text-neutral-content h-80">
                    <a href="https://www.linkedin.com/in/farbod-m-a33b64128/" target='blank'>
                        <div className="avatar">
                            <div className="w-36 rounded-none ">
                                <img className="image-full border-spacing-48 " src="./farbodMoayeri.jpg" />
                                
                            </div>
                        </div>
                    </a>
                    <div className="max-w-md text-left">
                        <h1 className="mb-5 text-5xl">Farbod Moayeri</h1>
                        <p className="font-bold">Software Developer</p>
                        <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-mountain rounded">
                            <a href={resume} target='blank'>Resume</a>
                        </button>
                        
                        {/* <p>Hello, my name is Farbod Moayeri and I am currently attending Seneca College.</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}




