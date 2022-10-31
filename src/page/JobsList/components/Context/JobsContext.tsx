import { useAuth } from '@/hooks'
import { JobsResponseI, JobsSearchParams, useGetJobsQuery } from '@/redux'
import { createContext, Dispatch, PropsWithChildren as Props, SetStateAction, useEffect, useState } from 'react'

interface JobsContext {
  response: JobsResponseI | undefined
  setSearchValue: Dispatch<SetStateAction<JobsSearchParams>>
  isSuccess: boolean
  isLoading: boolean
}

export const JobsContext = createContext<JobsContext | null>(null)

export const JobsContextProvider = ({ children }: Props) => {
  const user = useAuth()
  const [response, setResponse] = useState<JobsResponseI>()
  const [searchValue, setSearchValue] = useState<JobsSearchParams>({
    query: user.seniority,
    per_page: '10',
    page: '1',
  })
  const { data, isLoading, isSuccess } = useGetJobsQuery(searchValue)

  useEffect(() => {
    if (isSuccess) {
      setResponse(data)
    }
  }, [data])

  const values: JobsContext = { response, setSearchValue, isLoading, isSuccess }
  return <JobsContext.Provider value={values}>{children}</JobsContext.Provider>
}
