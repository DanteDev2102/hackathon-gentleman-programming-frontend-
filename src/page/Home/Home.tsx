import React from 'react'
import './styles/Home.css'
import { useGetJobsQuery } from '@/redux/api/jobsApiSlice'

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const { data } = useGetJobsQuery()
  return <div className='home'>Home</div>
}

export default Home
