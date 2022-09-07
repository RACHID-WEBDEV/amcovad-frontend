import React from 'react';
import Link from 'next/link';
import { Button, Input, Label } from '@/components/index';
import HookForm from '@/components/form/Form';
import { SignInImage } from '/public/assets/signUp';
import { SignInSchema } from '../schema/authSchema';
import AuthPage from '@/components/AuthPage';

const SignIn = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <AuthPage
      title="Get your transactions covered and secured."
      text="Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue."
      image={SignInImage}
      imagealt="sign in page image"
    >
      <div className="mt-8">
        <HookForm onSubmit={onSubmit} schema={SignInSchema}>
          <div className="mb-6">
            <Input label="Email address" name="email" type="email" />
          </div>
          <Input label="Password" name="password" type="password" />
          <div className="flex items-center  mb-3">
            <Label
              className="mt-[-10px] mb-4 text-sm"
              htmlFor="forgot password"
              name="forgotPassword"
              text={
                <Link href="forgot-password" passHref>
                  Forgot password?
                </Link>
              }
            />
          </div>
          <div>
            <Button className="w-full font-semibold text-black py-2.5 px-5">Sign in</Button>
          </div>
        </HookForm>
        {/* {errors && (
          <p className="block pt-2 text-base font-normal text-center text-danger-500 font-Inter ">Error: {errors}</p>
        )} */}
        <p className="block pt-2 text-center text-base text-secondary-700 font-normal font-Inter ">
          Don’t have account?{' '}
          <Link href="/sign-up">
            <a className=" text-primary-400 hover:text-primary-500">
              <b>Sign Up</b>
            </a>
          </Link>
        </p>
      </div>
    </AuthPage>
  );
};

export default SignIn;
