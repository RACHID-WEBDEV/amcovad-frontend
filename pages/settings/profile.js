import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { profileSchema } from '../../schema/authSchema';
import { Button, Input } from '@/components/index';
import HookForm from '@/components/form/Form';

function ChangePassword() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <DashboardLayout title="Manage Profile">
        <section className=" border-y-2 rounded-lg border-primary-500 container px-5 py-8 mx-auto flex flex-col lg:flex-row items-center lg:justify-between my-3 ">
          <div className="upload-cover px-1 my-8 mx-4  lg:w-2/5 bg-secondary-25  z-10 rounded-lg p-8 flex items-center justify-start flex-col md:ml-auto w-full mt-10 md:mt-0  ">
            <div className=" lg:my-20">
              <div className="border-dashed border h-36 m-auto p-2 w-36 rounded-full border-secondary-700  ">
                <div className="flex items-center justify-center h-full overflow-hidden relative w-full rounded-full outline-0">
                  <input
                    accept="image/*"
                    type="file"
                    className="opacity-0 w-full cursor-pointer h-full absolute top-0 left-0 z-20"
                  />

                  <div className="z-10 upload flex flex-col items-center justify-center absolute hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="h-6 mb-2 w-6 iconify iconify--ic"
                      sx="[object Object]"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z"
                        fill="currentColor"
                      />
                      <circle cx={13} cy={14} r={3} fill="currentColor" />
                      <path
                        d="M21 6h-3.17l-1.24-1.35A1.99 1.99 0 0 0 15.12 4h-6.4c.17.3.28.63.28 1c0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2c-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Upload photo</span>
                  </div>
                </div>
              </div>

              <span className="flex items-center justify-center font-medium text-xs leading-4 mx-auto mb-0 mt-4 text-center text-secondary-700 font-Inter">
                Allowed *.jpeg, *.jpg, *.png, *.gif <br />
                max size of 1.2 MB
              </span>
            </div>
          </div>
          <div className="upload-cover px-1 w-full lg:w-3/5 z-10 bg-secondary-25 rounded-lg">
            <HookForm onSubmit={onSubmit} schema={profileSchema}>
              <div className="space-y-2">
                <div className="w-full space-y-4 md:space-y-0">
                  <h2 className=" text-lg text-end text-left py-2 text-secondary-700 ">Personal info</h2>
                  <div className="space-y-5 md:w-full">
                    <Input label="Full Name" name="fullName" />
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                      <div className="col-span-full sm:col-span-3 ">
                        <Input label="Email address" name="email" type="email" />
                      </div>
                      <div className="col-span-full sm:col-span-3">
                        <Input label="Phone number" name="phone" type="number" />
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className=" text-lg text-end text-left py-1 text-secondary-700 ">Change Password</h2>
                <div className="w-full space-y-4 md:space-y-0">
                  <div className="md:w-full">
                    <div className=" relative ">
                      <Input label="Old Password" name="oldPassword" type="password" />
                      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3 ">
                          <Input label="New Password" name="password" type="password" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                          <Input label="Confirm Password" name="confirmPassword" type="password" />
                        </div>
                      </div>
                    </div>
                    <Button className="w-full text-white py-2.5 px-5 ">Save Changes</Button>
                  </div>
                </div>
              </div>
            </HookForm>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}

export default ChangePassword;
