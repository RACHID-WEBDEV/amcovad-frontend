import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import Logo from '@/public/assets/logo/logo.svg';
import sidebarData from '@/data/dashboard/sidebar';
import Settings from '@/public/assets/dashboard/Setting.svg';

const SideBar = () => {
  return (
    <>
      <aside className="h-full bg-secondary-25 overflow-y-auto lg:block  lg:relative lg:w-1/5 lg:z-auto right-0 hidden scrollbar">
        <div className="relative hidden lg:block  mb-10 ">
          <div className="h-[73px] bg-secondary-25 z-50 lg:w-1/5 flex items-center px-8 top-0 fixed">
            <Link href="/" passHref>
              <a>
                <Image src={Logo} width="167" height="42" alt="logo" />
              </a>
            </Link>
          </div>
          <div className="absolute lg:relative  h-full shadow bg-secondary-25 hidden lg:block pt-20">
            <div className="overflow-y-auto ">
              <ul className=" pb-6">
                {sidebarData.map((data, index) => {
                  return (
                    <NavLink
                      key={index}
                      name={data.name}
                      url={data.url}
                      icon={data.icon}
                      activeIcon={data.activeIcon}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="w-full">
              <div className="w-full flex items-center justify-between ">
                <div className="  px-6 py-2 w-full bg-secondary-50 ">
                  <Link href="/settings/profile" passHref>
                    <a className="inline-flex items-center w-full text-sm font-normal font-Inter text-secondary-700 focus:text-secondary-700 transition-colors duration-150 hover:text-primary-500 ">
                      <Image src={Settings} width="22" height="20" className="object-cover " alt="icon" />
                      <span className="ml-4">Settings</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
