import './styles.css';

export const ProjectDisplayElement = ({ index, image, title, description, date, site, repo, skills }) => {
    // const formattedDate = date.slice(0, 4);
    // const vite_fetch = import.meta.env.VITE_FETCH_API ?? `/api`;

    return (
        <>
            <div class="flex flex-col mb-[6%] rounded-3xl">
            <div class="w-full">
            <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2672585904">
                <img class="object-fill w-auto h-72 rounded-t-3xl" src="./kingdomDeath.jpg" alt="ProjectImage"></img>
            </a>
            </div>
            <div class="bg-slate-200 w-auto md:h-80 p-4 flex flex-col justify-between rounded-b-3xl">
            <div>
                <div class="flex justify-between">
                <h2 class="font-sans font-bold text-xl">Kingdom Death</h2>
                <div id="technologies" class="flex flex-wrap gap-2">
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Lua</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">TTS Lua</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Git</div>
                </div>
                </div>
                <div class="md:mt-3 mt-2">
                <p class="font-sans text-base text-black">My introduction to the software development world. This project is a fork off github of an unmaintained repository. I added more to the game board and changed the board itself significantly.</p>
                </div>
            </div>
            <div class="flex justify-end flex-row">
                <a href="https://github.com/Farbod678/kdm-tts">
                <button class="btn bg-black text-white">Repository</button>
                </a>
            </div>
            <p class="hidden p-4">2022</p>
            </div>
            </div>

            <div class="flex flex-col mb-[6%] rounded-3xl">
            <div class="w-full">
            <img class="w-full h-72 object-cover rounded-t-3xl" src="./portfolioWebsite.jpg" alt="ProjectImage"></img>
            </div>
            <div class="bg-slate-200 w-auto md:h-80 p-4 flex flex-col justify-between rounded-b-3xl">
            <div>
                <div class="flex justify-between">
                <h2 class="font-sans font-bold text-xl">My Portfolio Site</h2>
                <div id="technologies" class="flex flex-wrap gap-2">
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Docker</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Kubernetes</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Github Actions</div>
                </div>
                </div>
                <div class="md:mt-3 mt-2">
                <p class="font-sans text-base text-black">My professional Portfolio Site. Uses a React front-end with a back-end that is Dockerized and deployed using Kubernetes. Automated using Github Actions and uses a Postgres image to store project data and job data.</p>
                </div>
            </div>
            <div class="flex justify-end flex-row">
                <a href="https://github.com/Farbod-Moayeri/resume-frontend">
                <button class="btn bg-black text-white">Repository</button>
                </a>
            </div>
            <p class="hidden p-4">2023</p>
            </div>
            </div>

            <div class="flex flex-col mb-[6%] rounded-3xl">
            <div class="w-full">
            <a href="https://lego-gallery.onrender.com/">
                <img class="object-fill w-auto h-72 rounded-t-3xl" src="./legoCollection.png" alt="ProjectImage"></img>
            </a>
            </div>
            <div class="bg-slate-200 w-auto md:h-80 p-4 flex flex-col justify-between rounded-b-3xl">
            <div>
                <div class="flex justify-between">
                <h2 class="font-sans font-bold text-xl">Lego Gallery</h2>
                <div id="technologies" class="flex flex-wrap gap-2">
                    <div class="font-sans badge text-sm bg-blue-400 text-black">JavaScript</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Tailwind</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Sequelize</div>
                </div>
                </div>
                <div class="md:mt-3 mt-2">
                <p class="font-sans text-base text-black">A website that features lego sets and has CRUD operations to add, edit, or delete sets. Features proper authentication and authorization for the CRUD operations, with good data practices in terms of salting and hashing user credentials.</p>
                </div>
            </div>
            <div class="flex justify-end flex-row">
                <a href="https://github.com/Farbod-Moayeri/a3_cyclic">
                <button class="btn bg-black text-white">Repository</button>
                </a>
            </div>
            <p class="hidden p-4">2023</p>
            </div>
            </div>

            <div class="flex flex-col mb-[6%] rounded-3xl">
            <div class="w-full">
            <a href="https://web422a6-5jib.onrender.com/">
                <img class="object-fill w-auto h-72 rounded-t-3xl" src="./artGallery.jpeg" alt="ProjectImage"></img>
            </a>
            </div>
            <div class="bg-slate-200 w-auto md:h-80 p-4 flex flex-col justify-between rounded-b-3xl">
            <div>
                <div class="flex justify-between">
                <h2 class="font-sans font-bold text-xl">Art Gallery</h2>
                <div id="technologies" class="flex flex-wrap gap-2">
                    <div class="font-sans badge text-sm bg-blue-400 text-black">React Hook Form</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">JWT</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">SWR</div>
                </div>
                </div>
                <div class="md:mt-3 mt-2">
                <p class="font-sans text-base text-black">A website that features art pieces and has CRUD operations to add to favorites and to remove as well. Features good data practices in terms of salting and hashing user credentials.</p>
                </div>
            </div>
            <div class="flex justify-end flex-row">
                <a href="https://github.com/Farbod-Moayeri/Web422a6">
                <button class="btn bg-black text-white">Repository</button>
                </a>
            </div>
            <p class="hidden p-4">2024</p>
            </div>
            </div>

            <div class="flex flex-col mb-[6%] rounded-3xl">
            <div class="w-full">
            <img class="w-full h-72 object-cover rounded-t-3xl" src="./mangaScraper.png" alt="ProjectImage"></img>
            </div>
            <div class="bg-slate-200 w-auto md:h-80 p-4 flex flex-col justify-between rounded-b-3xl">
            <div>
                <div class="flex justify-between">
                <h2 class="font-sans font-bold text-xl">Manga Scraper</h2>
                <div id="technologies" class="flex flex-wrap gap-2">
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Selenium</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Swing GUI</div>
                    <div class="font-sans badge text-sm bg-blue-400 text-black">Java</div>
                </div>
                </div>
                <div class="md:mt-3 mt-2">
                <p class="font-sans text-base text-black">An IntelliJ Java project which utilizes Selenium to scrape manga off of a website. Uses Swing GUI for interaction with the user.</p>
                </div>
            </div>
            <div class="flex justify-end flex-row">
                <a href="https://github.com/Farbod-Moayeri/Manga-Scraper">
                <button class="btn bg-black text-white">Repository</button>
                </a>
            </div>
            <p class="hidden p-4">2025</p>
            </div>
            </div>

        </>
        
    );


};