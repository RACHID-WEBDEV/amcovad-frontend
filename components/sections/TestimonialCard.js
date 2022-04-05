import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const TestimonialCard = ({ bigCard, containerClassName, image, name, rating, testimony }) => {
  const paragraphsStyle =
    'mt-2 max-w-[420px] xl:max-w-[480px] text-[0.8125rem] md:text-sm text-amcovad-secondary-600 font-Inter font-normal';
  return (
    <div
      className={classNames(
        'bg-amcovad-secondary-100 px-8 rounded-md py-8 mb-6 shadow sm:inline-block',
        { 'lg:max-w-lg xl:max-w-xl xl:ml-12 w-full': bigCard },
        containerClassName
      )}
    >
      <div className="flex items-start text-left">
        <div className="flex-shrink-0">
          <div className="inline-block relative h-16 w-16  ">
            <Image alt="testimiials image" layout="fill" src={image} className="mx-auto object-cover rounded " />
          </div>
        </div>
        <div className="ml-6">
          <p className="flex items-baseline">
            <span className="text-amcovad-secondary-700  font-bold">{name}</span>
          </p>
          <div className="flex items-center mt-1">
            <span className="text-gray-500  pr-1 text-sm">{rating}</span>
            <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.56581 11.7797C9.27873 11.7797 8.9104 11.6876 8.44998 11.4168L6.8304 10.458C6.66248 10.3605 6.33748 10.3605 6.17498 10.458L4.54998 11.4168C3.59123 11.9855 3.0279 11.758 2.77332 11.5738C2.52415 11.3897 2.13415 10.9184 2.38873 9.83509L2.77332 8.17217C2.81665 7.99884 2.72998 7.70092 2.59998 7.57092L1.25665 6.22759C0.584982 5.55592 0.639149 4.98175 0.731232 4.70009C0.823316 4.41842 1.11582 3.92009 2.04748 3.763L3.7754 3.47592C3.9379 3.44884 4.17082 3.2755 4.24123 3.12925L5.19998 1.21717C5.63332 0.345088 6.20207 0.215088 6.49998 0.215088C6.7979 0.215088 7.36665 0.345088 7.79998 1.21717L8.75331 3.12384C8.82915 3.27009 9.06207 3.44342 9.22457 3.4705L10.9525 3.75759C11.8896 3.91467 12.1821 4.413 12.2687 4.69467C12.3554 4.97634 12.4096 5.5505 11.7433 6.22217L10.4 7.57092C10.27 7.70092 10.1887 7.99342 10.2266 8.17217L10.6112 9.83509C10.8604 10.9184 10.4758 11.3897 10.2266 11.5738C10.0912 11.6713 9.87457 11.7797 9.56581 11.7797ZM6.49998 9.56967C6.7654 9.56967 7.03082 9.63467 7.24207 9.75925L8.86165 10.718C9.3329 10.9997 9.63082 10.9997 9.74457 10.9184C9.85832 10.8372 9.93956 10.5501 9.8204 10.0193L9.43582 8.35634C9.3329 7.90675 9.50082 7.32717 9.82582 6.99675L11.1691 5.65342C11.4346 5.388 11.5537 5.128 11.4996 4.94925C11.44 4.7705 11.1908 4.62425 10.8225 4.56467L9.09457 4.27759C8.67748 4.20717 8.22248 3.87134 8.0329 3.49217L7.07957 1.5855C6.90623 1.23884 6.68957 1.033 6.49998 1.033C6.3104 1.033 6.09373 1.23884 5.92582 1.5855L4.96707 3.49217C4.77748 3.87134 4.32248 4.20717 3.9054 4.27759L2.1829 4.56467C1.81457 4.62425 1.5654 4.7705 1.50582 4.94925C1.44623 5.128 1.57082 5.39342 1.83623 5.65342L3.17957 6.99675C3.50457 7.32175 3.67248 7.90675 3.56957 8.35634L3.18498 10.0193C3.0604 10.5555 3.14707 10.8372 3.26082 10.9184C3.37457 10.9997 3.66707 10.9943 4.14373 10.718L5.76332 9.75925C5.96915 9.63467 6.23457 9.56967 6.49998 9.56967Z"
                fill="#01B3F8"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className={paragraphsStyle}>{testimony}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
