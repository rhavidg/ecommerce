import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { loggedUser } = useContext(UserContext);

  if (!loggedUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}
