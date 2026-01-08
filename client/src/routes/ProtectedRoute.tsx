
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ roles, children }: any) => {
  const { isAuthenticated, role } = useSelector((s: any) => s.auth);
  if (!isAuthenticated) return <Navigate to='/login' />;
  if (roles && !roles.includes(role)) return <Navigate to='/unauthorized' />;
  return children;
};
