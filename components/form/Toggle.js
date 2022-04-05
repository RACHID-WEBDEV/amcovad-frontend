import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';

const Toggle = ({ className, containerClassName, label, name }) => {
  const { register } = useFormContext();
  return (
    <>
      <div className={classNames('relative flex items-center', containerClassName)}>
        <input
          type="checkbox"
          {...register(name)}
          id={name}
          value={true}
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        />
        <span
          className={classNames(
            'w-11 h-6 flex items-center flex-shrink-0  p-1 bg-amcovad-secondary-300 rounded-full duration-300 ease-in-out peer-checked:bg-amcovad-primary-500 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4',
            className
          )}
        />
        <Label name={name} htmlFor={name} text={label} className="ml-2 text-base" />
      </div>

      <ErrorMessage name={name} />
    </>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};
Toggle.defaultProps = {
  className: null,
  containerClassName: null,
  label: null
};

export default Toggle;
