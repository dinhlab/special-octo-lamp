// Import job data from data.json file
import jobs from './data.json'
// Function to get a slice of jobs data based on page and searchQuery
async function getJobs (page, searchQuery = null) {
  // Wait for a 500ms delay
  await new Promise(resolve => setTimeout(resolve, 200))
  // Filter jobs data based on searchQuery (if provided), or return all jobs
  const filteredJobs = searchQuery
    ? jobs.filter(
      job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    : jobs
  // Calculate total number of pages based on filtered jobs
  const pagesTotal = Math.ceil(filteredJobs.length / 5)
  // Calculate start and end index of jobs slice based on page number
  const startIndex = (page - 1) * 5
  const endIndex = startIndex + 5
  // Return a slice of the filtered jobs data based on page number, and total number of pages
  return {
    jobs: filteredJobs.slice(startIndex, endIndex),
    pagesTotal
  }
}
// Function to get a job based on id
async function getJob (id) {
  // Wait for a 500ms delay
  await new Promise(resolve => setTimeout(resolve, 200))
  // Find and return the job that matches the provided id
  return jobs.find(job => job.id === id)
}
// Export the two functions
export default { getJobs, getJob }
