import React, { useContext } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import JobSkills from './JobSkills'
import AuthContext from '../auth/AuthContext'
import {
  Card,
  CardContent,
  Button,
  Typography,
  Stack,
  Divider
} from '@mui/material'
function JobCard ({ description, skills, id, title }) {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const handleClick = () => {
    if (auth.user) {
      navigate(`/job/${id}`, { state: { backgroundLocation: location } })
    } else {
      navigate('/login', { state: { backgroundLocation: location } })
    }
  }
  return (
    <Card
      variant='outlined'
      sx={{
        width: '100%',
        maxWidth: '350px',
        minWidth: '270px',
        height: '325px',
        margin: 'auto'
      }}
    >
      <Stack
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        height='100%'
        padding='5px'
      >
        <CardContent>
          <Typography variant='subtitle1'>{title}</Typography>
          <Divider />
          <JobSkills skills={skills} />
          <Typography>{description}</Typography>
        </CardContent>
        <Button
          variant='contained'
          component={Link}
          onClick={handleClick}
          to={`/job/${id}`}
          state={{ backgroundLocation: location }}
          sx={{ width: '130px', backgroundColor: 'green' }}
        >
          Learn More
        </Button>
      </Stack>
    </Card>
  )
}
export default JobCard
