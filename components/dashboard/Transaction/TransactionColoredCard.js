import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TransactionColoredCard = ({ background, btnTitle, description, title, url }) => {
  return (
    <div className={classNames('lg:w-1/3 shadow-lg rounded-3xl ', background)}>
      <div className=" p-5 h-52 bg-cover bg-[url('/assets/dashboard/LinePattern.png')] w-full">
        <div className="p-2 pb-6 my-2">
          <p className="font-bold pb-3 text-white text-lg">{title}</p>
          <span className="text-sm  text-white font-medium ">{description}</span>
        </div>
        <p className="px-2">
          <Link href={url} passHref>
            <a className="text-white hover:text-white border border-warning hover:border-white rounded-md py-2.5 px-10 capitalize">
              {btnTitle}
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

TransactionColoredCard.propTypes = {
  background: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

TransactionColoredCard.defaultProps = {
  background: 'bg-[#01a1df]',
  title: null,
  url: null
};

export default TransactionColoredCard;
