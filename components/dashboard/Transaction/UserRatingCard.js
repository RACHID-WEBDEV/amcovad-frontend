import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const UserRatingCard = ({ name, rating, status, UserImage }) => {
  return (
    <div className="lg:w-1/3">
      <div className="shadow-lg rounded-lg p-2 bg-secondary-25 w-full">
        <ul>
          <li className="flex items-center ">
            <div className="block relative">
              <Image
                alt="profil"
                src={UserImage}
                width={50}
                height={50}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm pb-1.5 text-secondary-700 font-medium ml-2">{name}</span>
              <div className="flex items-center justify-center">
                <Image src={rating} width={70} height={12} alt="stars" />
                <span className="text-[10px] text-secondary-500 font-Poppins ml-2">{status}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

UserRatingCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.any,
  status: PropTypes.string,
  UserImage: PropTypes.any
};

UserRatingCard.defaultProps = {
  rating: null,
  status: '',
  UserImage: null
};

export default UserRatingCard;
