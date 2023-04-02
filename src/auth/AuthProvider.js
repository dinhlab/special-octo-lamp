import React, { useState } from 'react'
import Auth from './auth'
import AuthContext from './AuthContext'
function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const singin = (newUser, callback) => {
    return Auth.signin(() => {
      setUser(newUser)
      callback()
    })
  }
  const signout = callback => {
    return Auth.signout(() => {
      setUser(null)
      callback()
    })
  }
  const value = { user, singin, signout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthProvider
