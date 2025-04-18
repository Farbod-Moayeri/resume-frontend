import './styles.css';

export const ProjectDisplayElement = ({ index, image, title, description, date, site, repo, skills }) => {
    const formattedDate = date.slice(0, 4);
    const vite_fetch = import.meta.env.VITE_FETCH_API ?? `/api`;

    return (
        <div className="flex flex-col mb-[6%] rounded-3xl">
            <div className="w-full">
                {site ? (
                    <a href={site}>
                        <img className="object-fill w-auto h-72 rounded-t-3xl" src={`${vite_fetch}/images/` + image} alt="ProjectImage"/> 
                    </a>
                ) : (
                    <img
                        className="w-full h-72 object-cover rounded-t-3xl"
                        src={`${vite_fetch}/images/` + image}
                        alt="ProjectImage"
                        />
                )}
            </div>

            <div className="bg-slate-200 w-auto md:h-80 p-4 flex flex-col justify-between rounded-b-3xl">
                <div>
                    <div className="flex justify-between">
                        <h2 className="font-sans font-bold text-xl">{title}</h2>
                        <div id="technologies" className="flex flex-wrap gap-2">
                            {skills.slice(0, 3).map((element, index) => (
                                <div key={index} className="font-sans badge text-sm bg-blue-400 text-black">{element.skill}</div>
                            ))}
                        </div>
                    </div>
                    <div className="md:mt-3 mt-2">
                        <p className="font-sans text-base text-black">{description}</p>
                    </div>
                </div>

                <div className="flex justify-end flex-row">
                    {repo && (
                        <a href={repo}>
                            <button className="btn bg-black text-white">Repository</button>
                        </a>
                    )}
                </div>

                <p className="hidden p-4">{formattedDate}</p>
            </div>
        </div>
    );


};