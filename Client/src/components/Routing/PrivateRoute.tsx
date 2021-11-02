import React from 'react'
import { Redirect, Route } from 'react-router-dom'

/// Reroutes User to Login Page IF not logged in

const PrivateRoute = (props:any) => {

  const user = null;

  if(!user) return <Redirect to='/'/>

  return <Route {...props}/>
}

export default PrivateRoute
