import React, { useState } from 'react';
import classNames from 'classnames';
import { RightCaret } from '@/public/assets/dashboard/navBarIcon';

const AccordionLayout = ({ options }) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      {options.map(({ title, content }, index) => (
        <div
          key={title}
          className="overflow-hidden flex w-full flex-col my-3 border-2 rounded-md border-secondary-300 hover:border-primary-300"
        >
          <div
            onClick={() => setIsActive(isActive === index ? null : index)}
            className="flex items-center p-5 lg:p-6 justify-between  cursor-pointer bg-secondary-25 hover:bg-white "
          >
            <div className="flex items-center gap-4 text-secondary-600 font-bold">
              <span>
                {isActive === index ? (
                  <RightCaret className="rotate-90" stroke="#01A1DF" />
                ) : (
                  <RightCaret stroke="#5D6677" />
                )}
              </span>
              <p
                className={classNames(' font-bold text-sm md:text-base', {
                  'text-primary-500': isActive === index
                })}
              >
                {title}
              </p>
            </div>
          </div>
          {index === isActive && (
            <div className=" w-full leading-6 text-secondary-600  transition-height ease duration-500 p-4 px-10 mb-6">
              {content}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default AccordionLayout;
