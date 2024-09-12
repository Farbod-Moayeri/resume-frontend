export const NavigationBar = () => {
    return (
        <>
            <div className="navbar justify-end  bg-mountain p-1">
                
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
            </div>

        </>
    )
}
