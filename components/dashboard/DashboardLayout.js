import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import Alert from '@/components/dashboard/component/Alert';

const DashboardLayout = ({ alert: { message, type }, children, title }) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="relative w-full lg:w-4/5 h-full overflow-y-auto scrollbar">
        <Navbar />
        <div className="w-full mt-20 lg:mt-[90px] px-6">
          <Alert type={type} message={message} />
          <h1 className="text-xl leading-9 lg:text-2xl font-Inter lg:leading-10 font-medium text-tertiary-color/90 ">
            {title}
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  alert: PropTypes.any
};

DashboardLayout.defaultProps = {
  children: null,
  title: null,
  alert: { message: null, type: null }
};

export default DashboardLayout;
