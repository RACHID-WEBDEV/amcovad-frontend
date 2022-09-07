import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { fulfilmentUpdateData, transactionCardData, fulfilmentTimelineData, statusData } from '@/data/dashboard/index';
import {
  ColoredCard,
  CreateCard,
  FulfilmentUpdate,
  FulfilmentTimeline,
  Status
} from '@/components/dashboard/component/index';
import Image from 'next/image';
import Chart from '@/public/assets/dashboard/Chart.png';

function Transaction() {
  return (
    <>
      <DashboardLayout title="Transaction" alert={{ message: 'Transaction created successfully!', type: 'success' }}>
        <main className="h-screen w-full pb-36 pt-4 px-2 lg:px-4 lg:pt-2">
          <div className="flex flex-wrap">
            <div className="w-full mb-16 ">
              <div className="flex flex-wrap">
                <CreateCard />
                {transactionCardData.map(({ backgroundColor, icon, title, total }, index) => {
                  return (
                    <ColoredCard
                      key={index}
                      isThreeColumn
                      backgroundColor={backgroundColor}
                      title={title}
                      icon={icon}
                      total={total}
                    />
                  );
                })}
              </div>
              <div className="flex flex-col lg:flex-row gap-5 w-full">
                <div className="w-full lg:w-5/12 lg:max-w-[400px]">
                  <div className="rounded-3xl px-6 py-2 mt-6 bg-secondary-25  w-full">
                    <p className="font-semibold text-lg text-black/75 pt-5">Fulfilment Update</p>
                    <div className="py-3">
                      <div className="flex items-center justify-between pr-4 text-sm font-Inter">
                        <p>Transaction party</p>
                        <p>Qty</p>
                        <p>Status</p>
                      </div>
                    </div>
                    <ul>
                      {fulfilmentUpdateData.map(({ buttonColor, name, quantity, status, userImage }, index) => {
                        return (
                          <FulfilmentUpdate
                            key={index}
                            buttonColor={buttonColor}
                            name={name}
                            quantity={quantity}
                            status={status}
                            userImage={userImage}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 lg:max-w-[330px]">
                  <div className="rounded-3xl p-4 mt-6 bg-secondary-25  w-full">
                    <p className="font-semibold text-lg text-black/75 pt-2 dark:text-white">Status</p>
                    <div className="flex items-center justify-between p-2">
                      <Image src={Chart} alt="profile image" />
                      <div>
                        <div className="flex flex-col ">
                          {statusData.map(({ label, value, color }, index) => {
                            return <Status key={index} label={label} value={value} color={color} />;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-3/12 w-full flex-1 ">
                  <div className="rounded-lg p-3 mt-6 border border-secondary-300   w-full">
                    <p className="text-secondary-700 font-semibold font-Inter text-lg py-1 pb-4">Fulfilment Timeline</p>
                    <div className="scrollbar max-h-[13.5rem] overflow-y-auto ">
                      {fulfilmentTimelineData.map(
                        ({ bgColor, fullTime, textColor, timeStart, timeEnd, timeLine }, index) => {
                          return (
                            <FulfilmentTimeline
                              key={index}
                              bgColor={bgColor}
                              fullTime={fullTime}
                              textColor={textColor}
                              timeStart={timeStart}
                              timeEnd={timeEnd}
                              timeLine={timeLine}
                            />
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
}

export default Transaction;
