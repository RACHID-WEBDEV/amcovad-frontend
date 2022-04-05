import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';

const Textarea = ({ className, label, labelClassName, name, placeholder }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];

  return (
    <div className="relative z-0 mb-4 w-full group">
      <textarea
        placeholder={placeholder ? placeholder : label}
        {...register(name)}
        className={classNames(
          'h-32 lg:h-48 px-4 w-full text-sm  text-amcovad-secondary-700  placeholder-transparent border-2 rounded-md border-amcovad-secondary-300 appearance-none focus:outline-none focus:ring-0  peer',
          { 'focus:border-amcovad-danger': hasErrors },
          { 'focus:border-amcovad-primary-500': !hasErrors },
          className
        )}
      />
      <Label name={name} htmlFor={name} floatLabel text={label} floatLabelClass={labelClassName} />

      <ErrorMessage name={name} />
    </div>
  );
};
Textarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

Textarea.defaultProps = {
  className: null,
  label: null,
  labelClassName: 'italic bg-transparent peer-focus:bg-transparent -translate-y-9 peer-focus:-translate-y-9',
  placeholder: null
};
export default Textarea;
