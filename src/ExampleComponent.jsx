import { useEffect, useState } from "react";

export const ExampleComponent = () => {
    

    const [projects, setProjects] = useState([])
    const setProjects = (e) => {
        
    }
    console.log(userName);
    useEffect(() => {
        console.log('useEffect');
        
    }, []) // dependency array
    return (
        <>
            <form method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                
                <div className="mb-4">
                    <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                    <input value={userName} onChange={handleUserNameChange} type="text" id="userName" name="userName" placeholder="User Name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="password2" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                    <input type="password" id="password2" name="password2" placeholder="Password" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
                </div>
            </form>
        </>
    )
}