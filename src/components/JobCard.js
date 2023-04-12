import { useLocation, Link } from 'react-router-dom'
import JobSkills from './JobSkills'
import {
  Card,
  CardContent,
  Button,
  Typography,
  Stack,
  Divider
} from '@mui/material'
function JobCard ({ description, skills, id, title }) {
  const location = useLocation()
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
