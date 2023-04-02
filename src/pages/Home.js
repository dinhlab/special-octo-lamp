import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Typography, Pagination, Grid, Container, Box } from '@mui/material'
import JobCard from '../components/JobCard'
import api from '../data/fetchData'

function Home () {
  // Set up state variables
  const [jobs, setJobs] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Fetch jobs when currentPage or searchQuery changes
    const fetchJobs = async () => {
      setIsLoading(true)
      const { jobs: fetchedJobs, pagesTotal } = await api.getJobs(
        currentPage,
        searchQuery
      )
      setJobs(fetchedJobs)
      setTotalPages(pagesTotal)
      setIsLoading(false)
    }
    fetchJobs()
  }, [currentPage, searchQuery])
  return (
    <Container sx={{ p: 3 }} maxWidth='lg'>
      {/* Show a loading message while isLoading is true */}
      {isLoading ? (
        <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>
          Loading...
        </Typography>
      ) : (
        <>
          {/* Show jobs if jobs array length is greater than 0 */}
          {jobs?.length > 0 ? (
            <>
              <Grid container spacing={3}>
                {jobs.map(job => (
                  <Grid key={job.id} item lg={3} md={4} sm={6} xs={12}>
                    <JobCard
                      id={job.id}
                      title={job.title}
                      description={job.description}
                      skills={job.skills}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box
                sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
              >
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  color='primary'
                  onChange={(event, value) => {
                    setCurrentPage(value)
                  }}
                />
              </Box>
            </>
          ) : (
            // Show a message if no jobs were found
            <Typography>No Results Found</Typography>
          )}
        </>
      )}
    </Container>
  )
}
export default Home
