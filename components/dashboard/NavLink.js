import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const NavLink = ({ containerClassName, icon, name, url }) => {
  const { asPath } = useRouter();
  return (
    <li
      className={classNames(
        'relative px-6 pb-2 pt-3 my-3  hover:bg-amcovad-secondary-200',
        {
          'bg-amcovad-secondary-200 border-r-4 border-amcovad-primary-400 ': url === asPath
        },
        containerClassName
      )}
    >
      <Link href={url} passHref>
        <a className="inline-flex items-center w-full text-sm font-normal font-Inter text-amcovad-secondary-700 focus:text-amcovad-secondary-700 transition-colors duration-150 hover:text-amcovad-primary-400 ">
          <Image src={icon} width="22" height="20" className="object-cover " alt="icon" />
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
