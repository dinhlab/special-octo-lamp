import { Outlet, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Stack from '@mui/material/Stack'
function Layout () {
  return (
    <Stack>
      <Navigation />
      {/* Render the nested routes */}
      <Outlet />
    </Stack>
  )
}
export default Layout
