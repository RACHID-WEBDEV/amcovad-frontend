import React, { useState } from 'react';
import { ChatIcon, HamburgerIcon, NotificationIcon, SearchIcon } from '@/public/assets/dashboard/navBarIcon';
import ManageProfile from './ManageProfile';
import MobileSidebar from './MobileSidebar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="fixed z-40 w-full lg:w-4/5">
        <nav className="bg-secondary-50 ">
          <div className="container px-6 pb-2 md:py-2 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <div className="flex pt-3 md:pt-1 items-center cursor-pointer lg:hidden ">
                  <span className="" onClick={() => setIsMenuOpen(true)}>
                    <HamburgerIcon />
                  </span>
                  <span className=" ml-6 md:pl-10">
                    <SearchIcon />
                  </span>
                </div>
                <div className="relative w-[300px] lg:block hidden  ">
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer ">
                    <SearchIcon />
                  </div>
                  <input
                    className="border font-Poppins text-sm font-normal  text-secondary-500 border-secondary-300 bg-secondary-25 focus:outline-none focus:border-primary-300 rounded w-full   pl-4 py-2"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center ">
                <div className="flex items-center mt-4 md:mt-0">
                  <div className="w-full flex items-center pl-3 justify-end">
                    <div className="h-full w-10 md:w-11 flex items-center justify-center ">
                      <div className="relative cursor-pointer">
                        <NotificationIcon width={24} height={24} />
                      </div>
                    </div>
                    <div className="h-full w-10 md:w-11 flex items-center justify-center  mr-4 cursor-pointer text-secondary-700">
                      <ChatIcon />
                    </div>
                    <ManageProfile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {setIsMenuOpen && (
        <div
          className={
            isMenuOpen
              ? 'w-full h-full fixed top-0 z-40  transform  translate-x-0  '
              : 'w-full h-full absolute z-40 transform -translate-x-full'
          }
          id="mobile-nav"
        >
          <div
            className=" bg-secondary-25 opacity-80 fixed z-20 h-screen overflow-y-auto scrollbar w-full lg:hidden"
            onClick={() => setIsMenuOpen()}
          />
          <MobileSidebar onClick={() => setIsMenuOpen()} />
        </div>
      )}
    </>
  );
};

export default Navbar;
