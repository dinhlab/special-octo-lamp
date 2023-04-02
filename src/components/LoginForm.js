import React, { useState, useContext } from 'react'
import AuthContext from '../auth/AuthContext'
import { TextField, FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, Box, Button, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
function LoginForm ({ callback }) {
  const [username] = useState('FakeUserName')
  const [password] = useState('12345')
  const auth = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleLogin = () => {
    auth.singin(username, callback)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        border: '1px solid',
        padding: '10px',
        borderRadius: '5px'
      }} component='form' gap={4}
    >
      <Typography variant='h5'>Login</Typography>
      <TextField
        disabled
        label='Username'
        defaultValue='user'
        value={username}
      />
      <FormControl>
        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          disabled
          id='outlined-adornment-password'
          type={showPassword ? 'text' : 'password'}
          value={password}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label='Password'
        />
      </FormControl>
      <Button onClick={handleLogin} variant='contained'>
        Login
      </Button>
    </Box>
  )
}
export default LoginForm
