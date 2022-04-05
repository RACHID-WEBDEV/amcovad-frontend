import React from 'react';
import { Button, CheckboxGroup, Input } from '@/components/index';
import HookForm from '@/components/form/Form';
import { SignUpImage } from '/public/assets/signUp';
import Link from 'next/link';
import { SignUpSchema } from '../schema/authSchema';
import AuthPage from '@/components/AuthPage';

const SignUp = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <AuthPage
        title="Get your transactions covered and secured."
        text="Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue."
        image={SignUpImage}
        imagealt="sign up page image"
      >
        <HookForm onSubmit={onSubmit} schema={SignUpSchema}>
          <Input label="Email address" name="email" type="email" />
          <div className="my-5">
            <Input label="Password" name="password" type="password" />
          </div>
          <Input label="Confirm Password" name="confirmPassword" type="password" />

          <div className=" mt-8 mb-3">
            <CheckboxGroup
              name="acceptTerms"
              options={[
                {
                  label: (
                    <>
                      I have read, and I agree to the
                      <Link href="#" passHref>
                        <a className=" text-amcovad-primary-400 hover:text-amcovad-primary-500"> Terms of Service </a>
                      </Link>
                      and
                      <Link href="#" passHref>
                        <a className=" text-amcovad-primary-400 hover:text-amcovad-primary-500"> Privacy Policy</a>
                      </Link>
                    </>
                  ),
                  value: true
                }
              ]}
            />
          </div>
          <div className="flex items-center mt-2 mb-6">
            <CheckboxGroup
              name="agreeContact"
              options={[
                {
                  label: (
                    <>
                      I agree to be contacted by
                      <Link href="#" passHref>
                        <a className=" text-amcovad-primary-400 hover:text-amcovad-primary-500"> amcovad</a>
                      </Link>
                    </>
                  ),
                  value: true
                }
              ]}
            />
          </div>

          <div>
            <Button className=" w-full font-semibold text-amcovad-black py-2.5 px-5">Create account</Button>
          </div>
          <p className="block pt-2 text-center text-base text-amcovad-secondary-700 font-normal font-Inter ">
            Have an account,{' '}
            <Link href="/sign-in">
              <a className=" text-amcovad-primary-400 hover:text-amcovad-primary-500">
                <b>Sign In</b>
              </a>
            </Link>
          </p>
        </HookForm>
      </AuthPage>
    </>
  );
};

export default SignUp;
