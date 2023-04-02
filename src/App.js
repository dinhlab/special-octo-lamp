import './styles.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import LoginModal from './components/LoginModal'
import JobDetailModal from './components/JobDetailModal'
import { useContext } from 'react'
import AuthContext from './auth/AuthContext'
function App () {
  // Get the current location and state using the useLocation hook
  const location = useLocation()
  const state = location.state
  // Get the authentication context using the useContext hook
  const auth = useContext(AuthContext)
  // Return the main component tree
  return (
    <>
      <Routes
        // Set the location to the backgroundLocation if it exists, otherwise use the current location
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='*' element={<p>Page not found</p>} />
      </Routes>
      {/* Conditionally render the job detail modal or login modal */}
      {state && auth.user ? (
        // Show the job detail modal if the user is authenticated and the state exists
        <Routes>
          <Route path='/job/:id' element={<JobDetailModal />} />
        </Routes>
      ) : (
        // Show the login modal if the user is not authenticated or the state does not exist
        <Routes>
          <Route path='/job/:id' element={<LoginModal />} />
        </Routes>
      )}
    </>
  )
}
// Export the component as default
export default App
