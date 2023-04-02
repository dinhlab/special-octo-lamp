import { useContext } from 'react'
import Modal from '@mui/material/Modal'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import AuthContext from '../auth/AuthContext'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  border: 'none'
}
function LoginModal () {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const handleClose = () => {
    navigate(-1)
  }
  // Show the login modal only when the user is not logged in
  if (auth.isLoggedIn) {
    return null
  }
  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <LoginForm callback={() => { }} />
      </Box>
    </Modal>
  )
}
export default LoginModal
