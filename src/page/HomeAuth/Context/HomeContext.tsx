import { useAuth } from '@/hooks'
import { useGetJobsQuery } from '@/redux'
import { createContext, useState, PropsWithChildren, useEffect } from 'react'
import { Jobs } from '@/redux'

interface IHomeContext {
  jobs: Jobs[]
  isLoading: boolean
}

export const HomeContext = createContext<IHomeContext>({
  jobs: [],
  isLoading: false,
})

export const HomeContextProvider = ({ children }: PropsWithChildren) => {
  const user = useAuth()
  const [jobs, setJobs] = useState<Jobs[]>([])
  const {
    data: jobsFetch,
    isSuccess,
    isLoading,
  } = useGetJobsQuery({
    query: user.seniority,
    page: '1',
    per_page: '3',
  })

  useEffect(() => {
    if (isSuccess) setJobs(jobsFetch.data)
  }, [jobsFetch])

  const values = { jobs, isLoading }
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>
}

export default HomeContext
