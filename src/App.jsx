import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hompage from './page/Hompage';
import DataListPage from './page/DataListPage';
import DataGrafikPage from './page/DataGrafikPage';
import Layout from './page/Layout';
const Dashboard = React.lazy(() => import('./page/admin/Dashboard'));
const DataEdit = React.lazy(() => import('./page/admin/DataEdit'));
const DataList = React.lazy(() => import('./page/admin/DataList'));
const DataTambah = React.lazy(() => import('./page/admin/DataTambah'));
import AdminLayout from './page/admin/AdminLayout';
import ProtectedRoute from './page/admin/ProtectedRoute';
import NotFoundPage from './components/NotFoundPage';
import React, { Suspense } from 'react';

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
      {
        path: 'data-list',
        element: <DataListPage />,
      },
      {
        path: 'data-grafik',
        element: <DataGrafikPage />,
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
        path: 'data-edit',
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
