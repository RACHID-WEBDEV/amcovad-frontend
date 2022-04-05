import React from 'react';
import { Button, Footer, Input, Navbar, Textarea } from '@/components/index';

import HookForm from '@/components/form/Form';
import contactImg from '../public/assets/contact/contact-img.png';
import smContactImg from '../public/assets/contact/sm-contact-img.png';

import Image from 'next/image';
import { contactUsSchema } from '../schema/contactUsSchema';

const Contact = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <Navbar />
      <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
        <div className="w-screen mx-auto">
          <div className="hidden md:block w-full pt-12">
            <Image src={contactImg} alt="contact page image" />
          </div>
          <div className="md:hidden w-full pt-4">
            <Image
              src={smContactImg}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="small contact hero image"
            />
          </div>
        </div>
        <div className="pt-4 lg:pt-12 pb-12 px-4">
          <div className="ml-20 max-w-6xl flex flex-col md:flex-row">
            <div className="w-full lg:w-2/3">
              <div className=" md:px-12 lg:px-0 lg:pl-20 ">
                <h2 className="text-2xl font-semibold text-amcovad-secondary-600 ">Fill the contact form</h2>
                <p className="text-sm py-6 font-normal text-amcovad-secondary-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet in fames bibendum rhoncus, sit.
                  Turpis est nam pellentesque fames.
                </p>
                <HookForm onSubmit={onSubmit} schema={contactUsSchema}>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-2 ">
                      <Input
                        label="Your name here"
                        labelClassName="italic bg-transparent peer-focus:bg-transparent -translate-y-9 peer-focus:-translate-y-9"
                        name="fullName"
                        type="text"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <Input
                        label="Your email"
                        labelClassName="italic bg-transparent peer-focus:bg-transparent -translate-y-9 peer-focus:-translate-y-9"
                        name="email"
                        type="text"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <Input
                        label="Phone"
                        labelClassName="italic bg-transparent peer-focus:bg-transparent -translate-y-9 peer-focus:-translate-y-9"
                        name="phone"
                        type="number"
                      />
                    </div>

                    <div className="col-span-full ">
                      <Input
                        label="Subject"
                        labelClassName="italic bg-transparent peer-focus:bg-transparent -translate-y-9 peer-focus:-translate-y-9"
                        name="subject"
                        type="text"
                      />
                    </div>
                    <div className="col-span-full">
                      <Textarea label="Your message" name="message" className="bg-amcovad-secondary-100" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button primary className="text-white lg:h-12 lg:px-9  ">
                      Send message
                    </Button>
                  </div>
                </HookForm>
              </div>
            </div>
            <div className=" w-full md:w-1/3 pl-9 hidden lg:block ">
              <h2 className="text-2xl font-semibold text-amcovad-secondary-600">HEADQUARTER</h2>
              <div className="pt-4">
                <h2 className="text-lg font-bold pb-1 text-amcovad-secondary-600">Lagos Address</h2>
                <p className="text-base font-semibold pb-3 text-[#5A6D77]"> 3rd Floor, Central District Area, Abuja.</p>
              </div>
              <div className="text-base font-semibold text-[#5A6D77]">
                <p>
                  <b className="text-amcovad-primary-500 pb-4">Tel:</b> 08055xxxxxxxxx, 08022xxxxxxxxxxx
                </p>
                <p>
                  <b className="text-amcovad-primary-500">Email:</b> amcovad@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
