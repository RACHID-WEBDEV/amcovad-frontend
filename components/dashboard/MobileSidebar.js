import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import sidebarData from '@/data/dashboard/sidebar';
import Logo from '@/public/assets/logo/logo.svg';
import Settings from '@/public/assets/dashboard/Setting.svg';
import { XIcon } from '@/public/assets/dashboard/navBarIcon';

const MobileSidebar = ({ onClick }) => {
  return (
    <div className="fixed z-40 sm:relative w-64 md:w-96 shadow pb-4 overflow-y-auto  lg:hidden transition duration-150 ease-in-out h-full">
      <div className="flex flex-col justify-between h-full w-full">
        <div className="bg-amcovad-secondary-100">
          <div className="flex items-center justify-between px-3  bg-amcovad-secondary-100 z-50 top-0 sticky">
            <div className="h-16 w-full flex items-center pt-1">
              <Link href="/" passHref>
                <a>
                  <Image src={Logo} width="155" height="35" alt="logo" />
                </a>
              </Link>
            </div>
            <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={onClick}>
              <XIcon width="16px" height="16px" />
            </div>
          </div>
          <ul className=" pt-6 ">
            {sidebarData.map((data, index) => {
              return <NavLink key={index} name={data.name} url={data.url} icon={data.icon} />;
            })}
          </ul>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center justify-between ">
            <div className="  px-6 py-2 w-full bg-amcovad-secondary-300 ">
              <Link href="/settings" passHref>
                <a className="inline-flex items-center w-full text-sm font-normal font-Inter text-amcovad-secondary-700 focus:text-amcovad-secondary-700 transition-colors duration-150 hover:text-amcovad-primary-400 ">
                  <Image src={Settings} width="22" height="20" className="object-cover " alt="icon" />
                  <span className="ml-4">Settings</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileSidebar.propTypes = {
  onClick: PropTypes.func
};
MobileSidebar.defaultProps = {
  onClick: null
};

export default MobileSidebar;
