import React from 'react';
import Link from 'next/link';

const FooterLink = ({ title, url }) => {
  return (
    <li className="text-amcovad-secondary-300 transition-colors duration-300 ">
      <Link href={url} passHref>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default FooterLink;
