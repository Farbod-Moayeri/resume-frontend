import React from 'react'
import { ProfileHeader } from './ProfileHeader'
import { JobTimeLine } from './JobTimeLine'
import { ProjectDisplay } from './ProjectDisplay'
import { SectorDivisor } from './SectorDivisor'


export const App = () => {
  return (
    
    <>
        <ProfileHeader />
        
        <JobTimeLine />
        
        <ProjectDisplay />
    </>
  )
}
