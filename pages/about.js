import React, { useState } from 'react';
import { Footer, Navbar } from '@/components/index';
import tabData from '../data/about/tab';

const About = () => {
  const [visibleTab, setVisibleTab] = useState(tabData[0].id);

  const style = {
    tabActive: `text-black border-b-[4px] border-amcovad-primary-400 text-amcovad-primary-400 `,
    tabContent: ` p-1 m-0`,
    tabTitle: ` inline-block p-4 lg:p-3 text-amcovad-black cursor-pointer `
  };
  const tabTitles = tabData.map((item, index) => (
    <li
      key={index}
      onClick={() => setVisibleTab(item.id)}
      className={visibleTab === item.id ? ` ${style.tabTitle} ${style.tabActive}` : ` ${style.tabTitle}`}
    >
      {item.tabTitle}
    </li>
  ));

  const tabContent = tabData.map((item, index) => (
    <p
      className="paragraphs font-Inter text-sm mt-10 lg:mt-12"
      key={index}
      style={visibleTab === item.id ? {} : { display: 'none' }}
    >
      {item.tabContent}
    </p>
  ));
  return (
    <>
      <Navbar />
      <div className="bg-about-background">
        <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto mt-20 lg:mt-10  lg:max-w-2xl">
            <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
              <video
                id="video"
                poster="https://i.ibb.co/LQjzRYL/video-preview.png"
                className="object-fill w-full h-[24rem] rounded "
                src="http://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
                controls
              />
            </div>
          </div>
          <div className="py-20 mx-auto lg:max-w-2xl">
            <ul className="flex flex-wrap justify-start lg:space-x-5 list-none border-b-[1px] border-[#C4C4C4]">
              {tabTitles}
            </ul>
            <div className={`${style.tabContent}`}>{tabContent}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
