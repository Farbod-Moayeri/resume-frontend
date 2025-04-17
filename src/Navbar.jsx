import resume from '../public/Resume.pdf'

export const Navbar = () => {
    /* <div className="navbar justify-end  bg-mountain p-1">
                
                <div>
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="./public/Resume">Download Resume</a></li>
                        <li>
                            <details>
                                <summary>
                                    Details
                                </summary>
                                <ul className="p-2 rounded-t-none">
                                    <li><a href="/Experience">Experience</a></li>
                                    <li><a href="/Skills">Skills</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href=""></a>
                </div>
                <div>

                </div>
            </div> */

    return (
        <>
            

            <div className="md:pt-4 md:pb-4 flex flex-row justify-start bg-black">
                <div className="md:mx-5"><a className="text-white md:text-4xl">Home</a></div>
                <div className="md:mx-5"><a href="#Projects" className="text-white md:text-4xl">Projects</a></div>
                <div className="md:mx-5"><a href="#Experience" className="text-white md:text-4xl">Experience</a></div>
                <div className="md:mx-5"><a href={resume} className="text-white md:text-4xl" target='blank'>Resume</a></div>
                <div className="md:mx-5"><a href={"https://www.linkedin.com/in/farbod-m-a33b64128/"} className="text-white md:text-4xl">LinkedIn</a></div>
            </div>

        </>
    )
}
