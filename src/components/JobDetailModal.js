import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../data/fetchData'
import JobSkills from './JobSkills'
import { Modal, Box, Typography, Card, CardContent } from '@mui/material'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: 600 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  border: 'none'
}
function JobDetailModal () {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getJob(id)
      setJob(data)
    }
    fetchData()
  }, [])
  const handleClose = () => {
    navigate(-1)
  }
  return (
    <div>
      <Modal
        open
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Card>
            <CardContent>
              <Typography variant='h5'>{job?.title}</Typography>
              <JobSkills skills={job?.skills} />
              <Typography>{job?.description}</Typography>
              <Typography variant='h6'>City: {job?.city}</Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  )
}
export default JobDetailModal
