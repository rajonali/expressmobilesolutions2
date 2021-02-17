import React, { createContext } from 'react'

const AuthContext = React.createContext({token:'', updateToken: () => {},


})



export default AuthContext;