import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AdminNavigation from './AdminNavigation';
import { useSelector } from 'react-redux';

const AdminLayout = () => {
  const { user } = useSelector((state) => state.auth);

  // Allow access to any logged-in user
  if (!user) {
    return <Navigate to='/login' />;
  }

  return (
    <div className='container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start'>
      <header className='lg:w-1/5 sm:2/5 w-full'>
        <AdminNavigation />
      </header>
      <main className='p-8 bg-white w-full'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
