import React from 'react';
import Image from 'next/image';
import priceImg from '../public/assets/faqs/faq-image.png';
import { Button, Footer, Navbar } from '@/components/index';
import SecurityLockImg from '@/public/assets/pricing/lock.svg';
import SecuritySafeImg from '@/public/assets/pricing/security-safe.svg';

const Faqs = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
          <div className="w-screen mx-auto">
            <div className=" w-full pt-20 lg:pt-16 ">
              <Image src={priceImg} className="h-96" alt="contact page image" />
            </div>
          </div>

          <div className=" mt-6 py-6 px-2 lg:py-12 mx-auto ">
            <div className="text-center">
              <h4 className="text-secondary-700 text-4xl lg:text-6xl font-RozhaOne">START RIGHT NOW</h4>
              <p className="text-secondary-700 text-sm md:text-base lg:text-xl font-semibold">
                Unlimited transactions and networking without feature limitations forever
              </p>

              <button className="mt-4 font-Inter rounded-md shadow-normal text-primary-500 hover:text-white hover:bg-primary-500 font-medium text-base lg:text-xl px-9 py-5 bg-primary-50">
                Get Started For Free
              </button>

              <div className="my-20  flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="h-[530px] lg:h-[600px] w-[320px]  md:w-[300px] lg:w-[400px] xl:w-[445px] border border-secondary-500 rounded-lg">
                  <div className="border-y-4 flex flex-col items-center relative h-[530px] lg:h-[600px] border-secondary-500 rounded-md">
                    <div className="  flex flex-col items-center justify-between">
                      <div className="text-center p-10 pt-14">
                        <Image src={SecurityLockImg} alt="Security Lock image" />

                        <p className="text-black py-3 text-lg md:text-xl lg:text-3xl xl:text-4xl xl:leading-[44px] font-Inter font-semibold">
                          BASIC SECURITY
                        </p>

                        <div className="text-black pt-6 lg:pt-10 text-sm">
                          <p>Unlimited transactions</p>
                          <p>Network Connections </p>
                          <p>Location tracking </p>
                          <p>Real-time messaging</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 absolute bottom-8 justify-end flex ">
                      <Button color="secondary" className="text-base lg:text-xl" size="xl">
                        Get Started Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[530px] lg:h-[600px] w-[320px] md:w-[300px] lg:w-[400px] xl:w-[445px] border border-warning-500 rounded-lg">
                  <div className="border-y-[6px] flex flex-col items-center relative h-[530px] lg:h-[600px] border-warning-500 rounded-md">
                    <div className="  flex flex-col items-center justify-between">
                      <div className="text-center p-10 pt-14">
                        <Image src={SecuritySafeImg} alt="Security Lock image" />

                        <p className="text-warning-600 py-3 text-lg md:text-xl lg:text-3xl xl:text-4xl xl:leading-[44px] font-Inter font-semibold">
                          PREMIUM SECURITY
                        </p>

                        <div className="text-black pt-6 lg:pt-10 text-sm">
                          <p>Unlimited transactions</p>
                          <p>Network Connections </p>
                          <p>Location tracking </p>
                          <p>Real-time messaging</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 absolute bottom-8 justify-end flex ">
                      <Button color="warning" className="text-base lg:text-xl" size="xl">
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F6F8] px-14 py-16 lg:py-20 ">
        <div>
          <div className="mt-2  avatar-group text-center">
            <div className="relative z-20 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-40">
              <Image
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&h=800&q=60"
                className="w-full rounded-full"
                layout="fill"
                alt="user2"
              />
            </div>

            <div className="relative z-30 inline-flex justify-center w-14 h-14 lg:w-16 lg:h-16 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-30">
              <Image
                src=" https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80"
                className="w-full rounded-full"
                layout="fill"
                alt="user3"
              />
            </div>

            <div className="relative z-20 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-30">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&h=500&q=60"
                className="w-full rounded-full"
                layout="fill"
                alt="user3"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-Inter text-xl md:text-xl font-semibold text-[#002432] py-2">Still have questions?</h1>
            <p className="py-2 text-[#4A5568] text-sm md:text-base">Can’t find the answers you are looking for?</p>
            <Button
              className="my-3 font-medium text-base md:text-xl font-Inter text-white capitalize py-3.5 px-7"
              size="xl"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faqs;
