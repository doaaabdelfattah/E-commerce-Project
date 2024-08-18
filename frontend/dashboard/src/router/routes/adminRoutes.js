import { lazy } from 'react';

const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard.jsx'))
const Category = lazy(() => import('../../views/admin/Category.jsx'))


export const adminRoutes = [
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
    role: 'admin'
  },
  {
    path: '/admin/dashboard/category',
    element: <Category />,
    role: 'admin'
  }
]