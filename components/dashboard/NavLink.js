import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const NavLink = ({ activeIcon, containerClassName, icon, name, url }) => {
  const { asPath } = useRouter();
  const isActiveIcon = url === asPath;
  return (
    <li
      className={classNames(
        'relative px-6 pb-2 pt-3 my-3  hover:bg-secondary-50',
        {
          'bg-secondary-50 border-r-4 border-primary-500 ': isActiveIcon
        },
        containerClassName
      )}
    >
      <Link href={url} passHref>
        <a className="inline-flex items-center w-full text-sm font-normal font-Inter text-secondary-700 focus:text-secondary-700 transition-colors duration-150 hover:text-primary-400 ">
          <Image
            src={isActiveIcon ? activeIcon : icon}
            width="22px"
            height="20px"
            className="object-cover "
            alt="icon"
          />

          <span className="ml-4">{name}</span>
        </a>
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  containerClassName: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

NavLink.defaultProps = {
  containerClassName: null
};

export default NavLink;
