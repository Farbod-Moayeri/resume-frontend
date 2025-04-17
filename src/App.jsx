import React from 'react'
import { ProfileHeader } from './ProfileHeader'
import { JobTimeLine } from './JobTimeLine'
import { ProjectDisplay } from './ProjectDisplay'
import { Summary } from './Summary'
import { Navbar } from './Navbar.jsx'


export const App = () => {
  return (
    
    <>
        <Navbar />

        <ProfileHeader />
        
        <Summary />

        <JobTimeLine />
        
        <ProjectDisplay />
    </>
  )
}
