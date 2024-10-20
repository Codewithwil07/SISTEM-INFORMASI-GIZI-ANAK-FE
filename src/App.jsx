import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hompage from './page/Hompage';
import Layout from './page/Layouts';
import Dashboard from './page/admin/Dashboard';
import DataEdit from './page/admin/DataEdit';
import DataList from './page/admin/DataList';
import DataTambah from './page/admin/DataTambah';
import AdminLayout from './page/admin/AdminLayout';
import ProtectedRoute from './page/admin/ProtectedRoute';
import NotFoundPage from './components/NotFoundPage';

const AdminLogin = React.lazy(() => import('./page/auth/AdminLogin'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Hompage />,
      },
    ],
  },
  {
    path: '/auth/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'data-edit/:id',
        element: <DataEdit />,
      },
      {
        path: 'data-list',
        element: <DataList />,
      },
      {
        path: 'data-tambah',
        element: <DataTambah />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};

export default App;
