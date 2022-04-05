import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';
import { Button, CheckboxGroup, DatePicker, Input, Textarea, Toggle, Label, Navbar } from '@/components/index';
import Select from '@/components/form/Select';
import RadioGroup from '@/components/form/RadioGroup';
import HookForm from '@/components/form/Form';
import { LogoBlack, SignInImage } from '/public/assets/signUp';

const SignIn = () => {
  const FormSchema = yup
    .object({
      email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
      password: yup.string().required('password is required').min(6, 'Password must be atleast 6 character long'),
      acceptTerms: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
      message: yup.string().required('Message is required').min(5),
      toggle: yup.boolean().oneOf([true], 'Click the toggle button '),
      select: yup.string().required('A select option is required!'),
      radio: yup.string().required('A Radio button option is required!').nullable(),
      datePicker: yup.string().required('Date is required').nullable()
    })
    .required();
  const sampleData = [
    { title: 'Privacy Policy', value: 'Policy' },
    { title: ' Sign amcovad', value: 'Signamcovad' },
    { title: ' Sign in Today', value: 'SigninToday' }
  ];
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="w-full 2xl:mx-auto 2xl:container">
        <section className="lg:bg-amcovad-primary-500 overflow-hidden max-w-full ">
          <div className=" bg-cover pb-24 lg:pb-0 bg-[url('../public/assets/signUp/md-hexagons.png')] bg-top bg-opacity-20 lg:bg-[url('../public/assets/signUp/hexagons.png')]">
            <Navbar authPageOnly />
            <div className="flex ">
              <div className="flex flex-col justify-center flex-1 px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
                <div className="w-full max-w-[43rem] lg:w-[38rem]  mx-auto pt-5 lg:pt-0 ">
                  <div className="relative lg:py-10 lg:px-8 lg:my-4 lg:max-w-[38rem] lg:w-[580px]">
                    <Link passHref href="/">
                      <a className=" hidden lg:block absolute left-3 top-[-8px] cursor-pointer">
                        <Image src={LogoBlack} alt="black logo" />
                      </a>
                    </Link>
                    <div className="bg-amcovad-secondary-100 p-6 lg:p-8 ">
                      <div>
                        <h1 className="font-RozhaOne max-w-[300px] md:max-w-[424px] text-2xl md:text-4xl font-extrabold lg:font-bold text-amcovad-secondary-600 pb-2">
                          Form Components UI
                        </h1>
                        <p className="text-amcovad-secondary-700 text-[14px]">
                          The starting point for your next project with Amcovad UI Kit, built on the newest version of
                          Tailwind ©, ready to be customized to your style.
                        </p>
                      </div>
                      <div className="mt-8">
                        <HookForm onSubmit={onSubmit} schema={FormSchema}>
                          <Input label="Email address" name="email" type="email" />
                          <Input label="Password" name="password" type="password" />

                          <Select
                            defaultOption="Chooose The best wiisely"
                            label="Choose Select"
                            name="select"
                            options={sampleData}
                          />
                          <div className="my-4">
                            <Toggle name="toggle" label="Click the Toggle" />
                          </div>
                          <div className=" mt-8 mb-3">
                            <CheckboxGroup
                              name="acceptTerms"
                              options={[
                                {
                                  label: (
                                    <>
                                      I have read, and I agree to the
                                      <Link href="#" passHref>
                                        <a className=" text-amcovad-primary-400 hover:text-amcovad-primary-500">
                                          {' '}
                                          Terms of Service
                                        </a>
                                      </Link>
                                    </>
                                  ),
                                  value: true
                                }
                              ]}
                            />
                          </div>
                          <DatePicker name="datePicker" />

                          <div className="my-4">
                            <RadioGroup name="radio" options={sampleData} />
                          </div>
                          <Textarea label="Your message" name="message" className="bg-amcovad-secondary-200" />

                          <div>
                            <Button className=" w-full font-semibold py-2.5 px-5 text-amcovad-black">
                              Set Up Amcovad UI
                            </Button>
                          </div>
                        </HookForm>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:flex justify-end hidden lg:w-screen lg bottom-0 ">
                <Image src={SignInImage} alt=" Sign up image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
