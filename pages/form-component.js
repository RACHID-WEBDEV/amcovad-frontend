import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';
import { Button, CheckboxGroup, DatePicker, Input, Textarea, Toggle, Label, Navbar } from '@/components/index';
import Select from '@/components/form/Select';
import RadioGroup from '@/components/form/RadioGroup';
import HookForm from '@/components/form/Form';
import { LogoBlack, SignInImage } from '/public/assets/signUp';
import { EmailIcon, TestIcon, TestIcon1, TestIcon2 } from '@/public/assets/dashboard/navBarIcon';
import { Badge, BadgeGroup } from '@/components/form/Badge';
import UserPhoto from '@/public/assets/dashboard/User2.png';

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
        <section className="lg:bg-primary-500 overflow-hidden max-w-full ">
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
                    <div className="bg-secondary-25 p-6 lg:p-8 ">
                      <div>
                        <h1 className="font-RozhaOne max-w-[300px] md:max-w-[424px] text-2xl md:text-4xl font-extrabold lg:font-bold text-secondary-600 pb-2">
                          Form Components UI
                        </h1>
                        <p className="text-secondary-700 text-[14px]">
                          The starting point for your next project with Amcovad UI Kit, built on the newest version of
                          Tailwind ©, ready to be customized to your style.
                        </p>
                      </div>
                      <div className="mt-8">
                        <HookForm onSubmit={onSubmit} schema={FormSchema}>
                          <Input
                            label="Email address"
                            name="email"
                            type="email"
                            leadingIcon={<EmailIcon />}
                            hintText="This is a hint text to help your email."
                            hintIcon
                            floatLabel
                            feedBack="FEEDBACK.SUCCESS"
                          />
                          <Input
                            label="Password"
                            name="password"
                            type="password"
                            hintText="This is a hint text to help your password."
                            feedBack="FEEDBACK.SUCCESS"
                          />

                          <Select
                            floatLabel
                            leadingIcon={<EmailIcon />}
                            hintIcon
                            hintText="This is a hint text to help user select state of origin."
                            defaultOption="Select your State of Origin"
                            label="State of Origin"
                            name="select"
                            options={sampleData}
                            feedBack="FEEDBACK.SUCCESS"
                          />
                          <div className="my-4">
                            <Toggle
                              name="toggle"
                              label="Remember me"
                              helperLabel
                              description="Save my login details for next time."
                            />
                          </div>
                          <div className="my-4">
                            <Toggle
                              checked
                              //disabled
                              name="toggledisable"
                              label="Remind me tomorrow"
                              helperLabel
                              description="Disabled details remind next time."
                            />
                          </div>
                          <div className=" mt-4 mb-3">
                            <CheckboxGroup
                              // size="md"
                              disabled
                              //checked
                              name="acceptTerm"
                              //helperLabel
                              description="This is a checkbox description example"
                              options={[
                                {
                                  label: (
                                    <>
                                      Disabled checked I have agree to the
                                      <Link href="#" passHref>
                                        <a className=" text-primary-400 hover:text-primary-500"> Terms of Service</a>
                                      </Link>
                                    </>
                                  ),
                                  value: true
                                }
                              ]}
                            />
                          </div>
                          <div className=" mt-4 mb-3">
                            <CheckboxGroup
                              // minusIcon
                              // size="md"
                              // disabled
                              // checked
                              name="acceptTerms"
                              helperLabel
                              description="This is a checkbox description"
                              options={[
                                {
                                  label: (
                                    <>
                                      I have read, and I agree to the
                                      <Link href="#" passHref>
                                        <a className=" text-primary-400 hover:text-primary-500"> Terms of Service</a>
                                      </Link>
                                    </>
                                  ),
                                  value: true
                                }
                              ]}
                            />
                          </div>
                          <div className="py-1">
                            <DatePicker
                              name="datePicker"
                              label="Click to select your age"
                              placeholder="Pick a Date options"
                            />
                          </div>

                          <div className="my-4">
                            <RadioGroup
                              // checkIcon
                              // size="md"
                              //disabled
                              //checked
                              name="radio"
                              // columns
                              // helperLabel
                              // description="This is a checkbox description"
                              options={sampleData}
                            />
                          </div>
                          <Textarea
                            floatLabel
                            leadingIcon={<EmailIcon />}
                            hintIcon
                            hintText="This is a hint text to help user Textarea."
                            label="Your message"
                            name="message"
                            // feedBack="FEEDBACK.SUCCESS"
                          />

                          <div className="my-4">
                            <Badge
                              text="New feature"
                              // color="purple"
                            />
                            <BadgeGroup
                              badgeText="Badge feature"
                              // avatar={UserPhoto}
                              //afterIcon={<TestIcon width={12} height={12} />}
                              // color="orange"
                              text="We’ve just released a new feature"
                            />
                          </div>

                          <div>
                            <Button className="w-full text-center" size="md">
                              Set Up Amcovad UI
                            </Button>
                          </div>
                        </HookForm>
                      </div>
                    </div>
                    <div className="my-4 flex flex-wrap items-center bg-secondary-25 p-5">
                      <Button size="xs">Button xs CTA</Button>
                      <Button size="sm" leftIcon={<TestIcon2 />} outline color="danger">
                        Button sm CTA
                      </Button>
                      <Button size="md" color="secondary" rightIcon={<TestIcon />}>
                        Button md CTA
                      </Button>
                      <Button color="warning" leftIcon={<TestIcon />} size="lg">
                        Button lg CTA
                      </Button>
                      <Button size="xl" outline color="success" rightIcon={<TestIcon2 />}>
                        Button xl CTA
                      </Button>
                      <Button size="lg" color="success">
                        <TestIcon />
                      </Button>

                      <Button size="sm" outline color="danger" icon={<TestIcon2 />}></Button>
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
