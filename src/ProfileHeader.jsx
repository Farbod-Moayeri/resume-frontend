export const ProfileHeader = () => {
    return (
        <>
            <div className="hero" style={{backgroundImage: 'url(./smallerRedMountain.jpg)'}}>
                
                <div className="hero-content text-center text-neutral-content h-80">
                    <div className="avatar">
                        <div className="w-36 rounded-xl">
                            <img className=" image-full border  border-spacing-48 border-black" src="./farbodMoayeri.jpg" />
                        </div>
                    </div>
                    <div className="max-w-md text-left">
                        <h1 className="mb-5 text-5xl">Farbod Moayeri</h1>
                        <p className="mb-5 font-bold">Software Developer</p>
                        {/* <p>Hello, my name is Farbod Moayeri and I am currently attending Seneca College.</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}




