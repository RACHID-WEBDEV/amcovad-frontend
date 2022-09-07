import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FulfilmentTimeline = ({ bgColor, fullTime, textColor, timeStart, timeEnd, timeLine }) => {
  return (
    <section className="mb-2 rounded justify-between py-2 w-full ">
      <div className="flex items-center justify-center font-Inter gap-3 ">
        <div className="flex flex-col justify-between ">
          <p className="text-secondary-500 order-first text-xs mb-3 font-medium ">{timeStart}</p>

          <p className="text-secondary-500 order-last text-xs mt-3 font-medium ">{timeEnd}</p>
        </div>
        <div className={classNames('w-screen lg:w-full rounded bg-cover p-2 ', bgColor)}>
          <p className={classNames('text-[13px] font-semibold ', textColor)}>{timeLine}</p>
          <span className="text-secondary-400 font-Inter text-xs font-medium ">{fullTime}</span>
        </div>
      </div>
    </section>
  );
};

FulfilmentTimeline.propTypes = {
  bgColor: PropTypes.string,
  fullTime: PropTypes.string,
  textColor: PropTypes.string,
  timeStart: PropTypes.string,
  timeEnd: PropTypes.string,
  timeLine: PropTypes.string.isRequired
};

FulfilmentTimeline.defaultProps = {
  bgColor: null,
  fullTime: null,
  textColor: null,
  timeStart: null,
  timeEnd: null
};
export default FulfilmentTimeline;
