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

export const Profile = () => {
    return (
        <>
            <div className="hero bg-sky">

            </div>
        </>
    )
};

export const JobTimeLine = () => {
    return (
        <>
            <div className="bg-sky min-h-fit">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">1984</time>
                            <div className="text-lg font-black">First Macintosh computer</div>
                            The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
                        </div>
                        <hr/>
                    </li>
                </ul>
            </div>
        </>
    )
}

