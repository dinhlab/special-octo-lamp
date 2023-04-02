import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
function JobSkills ({ skills }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        boxShadow: 0
      }}
      component='ul'
    >
      {skills?.map((skill, i) => (
        <Chip
          key={i}
          component='li'
          size='small'
          color='primary'
          label={skill}
          sx={{
            paddingBottom: '2px',
            backgroundColor: 'orange',
            margin: '2px'
          }}
        />
      ))}
    </Paper>
  )
}
export default JobSkills
