import React from 'react';
import { LightPinIcon, PinIcon, MoreIcon } from '@/public/assets/dashboard/navBarIcon';
import PropTypes from 'prop-types';

const ListCard = ({ date, text, pinned, title }) => {
  return (
    <>
      {title && <p className="py-2 font-Poppins text-secondary-500 text-sm">{title}</p>}
      <section className="flex items-start mb-2 rounded justify-between border border-secondary-100 py-2 px-2 bg-secondary-25 hover:bg-secondary-50">
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col w-full ml-2 items-start justify-between font-Inter ">
            <p className="text-secondary-700 pb-1 flex-wrap max-w-lg">{text}</p>
            <p className="text-secondary-500 text-[10px]">{date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-1">
          <span className="pr-4">{pinned ? <PinIcon /> : <LightPinIcon />}</span>
          <MoreIcon />
        </div>
      </section>
    </>
  );
};

ListCard.propTypes = {
  date: PropTypes.string,
  pinned: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string
};

ListCard.defaultProps = {
  date: null,
  pinned: null,
  text: null,
  title: null
};

export default ListCard;
