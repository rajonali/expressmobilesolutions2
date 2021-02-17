import React, { useState, useReducer, useEffect } from 'react'
import AuthContext from './AuthContext'
import firebase from 'gatsby-plugin-firebase'

const initialState = {
  uid: "",
  isUserLoggedIn: false,
}

function AuthReducers(state, action) {
  switch (action.type) {
    case 'TOGGLE_USER_LOGGED_IN': {
      return {
        ...state,
        isUserLoggedIn: state.isUserLoggedIn
      }
    }
    default:
      throw new Error('Bad action type')
  }
}



const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducers, initialState)
  const [uid, setUid] = useState("")
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null);


  const updateToken = (token) => setToken(
    token    
  )

  
  const signOut = () => {
    setToken('')
  }


  return (
    <AuthContext.Provider
      value={{
        token, 
        updateToken,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider