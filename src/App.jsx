import React from 'react'
import { ProfileHeader } from './ProfileHeader'
import { JobTimeLine } from './JobTimeLine'
import { ProjectDisplay } from './ProjectDisplay'
import { SectorDivisor } from './SectorDivisor'
import { Summary } from './Summary'


export const App = () => {
  return (
    
    <>
        <ProfileHeader />
        
        <Summary />

        <JobTimeLine />
        
        <ProjectDisplay />
    </>
  )
}
