export const ProjectDisplay = () => {
    return (
        <>
            <div className=" flex  bg-blueRock items-center flex-col">
                <div className="m-8">
                    <h1 className=" border-l-darkRock text-7xl">Projects</h1>
                </div>

                <div id="projectList" className="flex w-9/12 gap-8">
                    <div className="card card-side bg-base-100 shadow-xl w-2/5">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Project"/></figure>
                        <div className="card-body pb-5">
                            <h2 className="card-title">Title</h2>
                            <p>description</p>
                            <p className="">Year: XXXX</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Link</button>
                            </div>
                            <div id="technologies" className="flex gap-2">
                                <div className="badge badge-neutral">C++</div>
                                <div className="badge badge-neutral">Java</div>
                            </div>
                            
                        </div>
                    </div>
                    {/* <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Project"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Link</button>
                            </div>
                            <div id="technologies" className="flex gap-2">
                                <div className="badge badge-neutral">C++</div>
                                <div className="badge badge-neutral">Java</div>
                            </div>
                            
                        </div>
                    </div> */}
                </div>
                
            </div>
        </>
    )
}