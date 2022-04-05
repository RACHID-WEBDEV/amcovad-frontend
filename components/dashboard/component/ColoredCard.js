import React from 'react';
import PropTypes from 'prop-types';

const ColoredCard = ({ backgroundColor, icon, title, total }) => {
  return (
    <section className="w-full lg:w-4/12 transition duration-500 hover:scale-105 ">
      <div className="p-2">
        <div className="rounded-[0.625rem]" style={{ backgroundColor: `${backgroundColor}` }}>
          <div className="px-4 pt-4 ">{icon}</div>
          <div className="px-4 py-2">
            <p className="font-Inter font-medium text-base leading-7">{title}</p>
            <p className=" pt-2 pb-1 text-4xl font-Poppins font-normal leading-7 text-amcovad-tertiary">{total}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

ColoredCard.propTypes = {
  backgroundColor: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  total: PropTypes.string
};

ColoredCard.defaultProps = {
  backgroundColor: null,
  icon: null,
  title: null,
  total: null
};
export default ColoredCard;
