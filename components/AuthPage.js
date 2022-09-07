import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/index';
import { LogoBlack } from '/public/assets/signUp';
import Link from 'next/link';
import PropTypes from 'prop-types';

const AuthPage = ({ children, image, imagealt, text, title }) => {
  return (
    <section className="w-full 2xl:m-auto  2xl:container">
      <div className="lg:bg-primary-500 overflow-y-scroll  max-w-full h-screen">
        <div className="bg-cover bg-[url('../public/assets/signUp/md-hexagons.png')] bg-top bg-opacity-20 lg:bg-[url('../public/assets/signUp/hexagons.png')]">
          <Navbar authPageOnly />
          <div className="flex justify-center ">
            <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
              <div className="w-full max-w-[43rem] lg:w-[38rem]  mx-auto pt-5 lg:pt-0 ">
                <div className="relative lg:py-10 lg:px-8 lg:my-4 lg:max-w-[38rem] lg:w-[580px]">
                  <Link passHref href="/">
                    <a className=" hidden lg:block absolute left-3 top-[-8px] cursor-pointer">
                      <Image src={LogoBlack} alt="black logo" />
                    </a>
                  </Link>
                  <div className="bg-secondary-25  p-6 lg:p-8 ">
                    <div className="mb-8">
                      <h2 className=" font-RozhaOne max-w-[300px] md:max-w-[424px] text-2xl md:text-4xl font-extrabold lg:font-bold text-tertiary pb-2">
                        {title}
                      </h2>
                      <p className="text-secondary-700 text-[14px]">{text}</p>
                    </div>
                    {children}
                  </div>
                </div>
              </div>
            </div>
            {image && (
              <div className="relative lg:flex flex-1 hidden lg:w-full bottom-0 ">
                <Image src={image} alt={imagealt} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

AuthPage.propTypes = {
  children: PropTypes.node,
  image: PropTypes.any,
  imagealt: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

AuthPage.defaultProps = {
  children: null,
  image: null,
  imagealt: 'authencation page image'
};

export default AuthPage;
