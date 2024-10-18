import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectisAuthenticated,
  selectAuthLoading,
} from '../../redux/features/auth/authSelector';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectisAuthenticated);
  const loading = useSelector(selectAuthLoading);
  // const dispatch = useDispatch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !isAuthenticated) {
    return <Navigate to='/auth/login' replace />;
  }

  return children;
};

export default ProtectedRoute;
