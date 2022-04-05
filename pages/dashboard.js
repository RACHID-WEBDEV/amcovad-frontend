import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { coloredData, graphData, listData, transactData } from '@/data/dashboard/index';
import { ColoredCard, GraphCard, ListCard } from '@/components/dashboard/component/index';

import { Button } from '../components';
function Dashboard() {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <main className="h-screen w-full pb-36 pt-4 px-2 lg:px-4 lg:pt-2">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-[65%] mb-16 ">
              <div className="flex flex-wrap">
                {coloredData.map(({ backgroundColor, icon, title, total }, index) => {
                  return (
                    <ColoredCard
                      key={index}
                      backgroundColor={backgroundColor}
                      title={title}
                      icon={icon}
                      total={total}
                    />
                  );
                })}
              </div>

              <div className="flex flex-wrap">
                {graphData.map(({ amount, graph, monthStat, title, verified, unverified }, index) => {
                  return (
                    <GraphCard
                      key={index}
                      amount={amount}
                      graph={graph}
                      monthStat={monthStat}
                      title={title}
                      verified={verified}
                      unverified={unverified}
                    />
                  );
                })}
              </div>
              <div className="lg:p-2">
                <div className=" rounded-lg w-full mt-2 border border-amcovad-secondary-200 py-6 relative overflow-hidden">
                  <div className="px-3">
                    <div className="w-full flex items-center justify-between mb-4">
                      <p className="text-amcovad-secondary-700 text-lg font-medium font-Poppins">Published Templates</p>
                      <p className="flex items-center text-sm font-light py-1 px-2 border border-amcovad-secondary-200 hover:text-amcovad-secondary-700 text-amcovad-secondary-500 ">
                        Today, 13 Sep 2021
                      </p>
                    </div>
                    <div className="scrollbar max-h-60 overflow-y-auto ">
                      {listData.map(({ date, pinned, text }, index) => {
                        return <ListCard key={`listData-${index}`} date={date} pinned={pinned} text={text} />;
                      })}
                    </div>
                  </div>
                  <div className="w-full p-2.5 bg-amcovad-white border rounded-b-lg border-amcovad-secondary-200 absolute bottom-0 z-30">
                    <p className="text-center text-amcovad-primary-400 font-Inter text-[15px]">See All Announcement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[35%] ">
              <div className="m-2 ">
                <div className="flex py-3 bg-amcovad-tertiary rounded-t-lg text-white text-lg px-4 font-medium">
                  <p>Recently Activity</p>
                </div>
                <div>
                  <div className="rounded-b-lg p-2 flex 2xl:items-start w-full bg-amcovad-secondary-700">
                    <div className="w-full text-white font-Poppins px-2 py-4">
                      <div className=" w-full mb-4">
                        <p className="text-[0.625rem] text-amcovad-secondary-400 font-Inter font-medium">
                          10.40 AM, Fri 10 Sept 2022
                        </p>
                        <h1 className="font-medium font-Poppins text-lg my-1.5">Explore Modern Transaction. </h1>
                        <p className="my-2 text-sm text-amcovad-secondary-400">
                          Kindly check the requirements and terms of work and make sure everything is right.
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className=" text-sm font-normal">Today you makes 12 Activity</p>
                        <Button className="px-2.5 py-1.5 text-sm font-medium lg:text-xs xl:text-sm capitalize">
                          See All Activity
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" rounded-lg w-full mt-2 border border-amcovad-secondary-200 py-6 relative overflow-hidden">
                  <div className="px-3">
                    <div className="w-full flex items-center justify-between mb-4">
                      <p className="text-amcovad-secondary-700 text-lg font-medium font-Poppins">
                        Existing Transactions
                      </p>
                      <p className="flex items-center text-sm font-light py-1 px-2 border border-amcovad-secondary-200 hover:text-amcovad-secondary-700 text-amcovad-secondary-500 ">
                        Today, 13 Sep 2021
                      </p>
                    </div>
                    <div className="scrollbar max-h-[23.5rem] overflow-y-auto ">
                      {transactData.map(({ date, text, title }, index) => {
                        return <ListCard key={`transactData-${index}`} title={title} date={date} text={text} />;
                      })}
                    </div>
                  </div>
                  <div className="w-full p-2.5 bg-amcovad-white border rounded-b-lg border-amcovad-secondary-200 absolute bottom-0 z-30">
                    <p className="text-center text-amcovad-primary-400 font-Inter text-[15px]">
                      Creat a New Transaction
                    </p>
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

export default Dashboard;
