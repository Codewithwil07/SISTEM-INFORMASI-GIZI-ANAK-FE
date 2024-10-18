import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hompage from './page/Hompage';
import DataListPage from './page/DataListPage';
import DataGrafikPage from './page/DataGrafikPage';
import Layout from './page/layout';
import Dashboard from './page/admin/Dashboard';
import DataEdit from './page/admin/DataEdit';
import DataList from './page/admin/DataList';
import AdminLogin from './page/auth/AdminLogin';
import AdminLayout from './page/admin/AdminLayout';
import ProtectedRoute from './page/admin/ProtectedRoute';
import DataTambah from './page/admin/DataTambah';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <h1 className='text-center font-bold text-4xl'>Error 404 Not Found</h1>
    ),
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
        index: true,
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
  return <RouterProvider router={router} />;
};

export default App;
