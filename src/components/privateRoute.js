// import React, { ReactElement } from 'react'
// import { Route } from 'react-router-dom'

// export default function PrivateRoute({ component: Component, ...rest }) {
//   //const { currentUser } = useAuth();
//   const users = localStorage.getItem('luckyNumber_User')
//   const currentUser = JSON.parse(users)
//   return (
//     <Route
//       {...rest}
//       render={(props) => (currentUser ? <Component {...props} /> : <Redirect to="/login" />)}
//     ></Route>
//   )
// }
import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function PrivateRoute({ children }) {
  const users = localStorage.getItem('luckyNumber_User')
  const currentUser = JSON.parse(users)
  return <>{currentUser ? children : <Navigate to="/login" />}</>
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.any,
}
