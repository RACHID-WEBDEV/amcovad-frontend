import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FulfilmentUpdate = ({ buttonColor, name, quantity, status, userImage }) => {
  return (
    <li className="flex items-center justify-between my-3 space-x-2 text-sm text-black font-normal">
      <div className="flex items-center">
        <Image src={userImage} width={48} height={48} alt="user image" className="mx-auto object-cover rounded-xl " />
        <p className="text-sm text-black font-normal pl-3 ">{name}</p>
      </div>
      <div>
        <p>{quantity}</p>
      </div>
      <p className={classNames('px-3 py-1 flex items-center text-sm rounded-lg font-Poppins text-white', buttonColor)}>
        {status}
      </p>
    </li>
  );
};

FulfilmentUpdate.propTypes = {
  buttonColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  status: PropTypes.string,
  userImage: PropTypes.node
};

FulfilmentUpdate.defaultProps = {
  buttonColor: null,
  quantity: null,
  status: null,
  userImage: null
};
export default FulfilmentUpdate;
