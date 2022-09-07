import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorMessage, HelperLabel } from '.';
import classNames from 'classnames';

const Toggle = ({
  checked,
  className,
  containerClassName,
  description,
  disabled,
  helperLabel,
  helperLabelClassName,
  label,
  name
}) => {
  const { register } = useFormContext();
  return (
    <>
      <div className="flex ">
        <div className={classNames('relative flex items-center', containerClassName)}>
          <div className="relative">
            <input
              checked={checked}
              disabled={disabled}
              type="checkbox"
              {...register(name)}
              id={name}
              value={true}
              className={classNames(
                'peer appearance-none cursor-pointer bg-secondary-50 border border-secondary-50 rounded-xl checked:border-primary-500 checked:bg-primary-500 w-10 h-5 focus:shadow-primary-xs',
                { 'checked:border-primary-500 checked:bg-primary-500': !disabled },
                { 'checked:border-secondary-50 checked:bg-secondary-50': disabled },
                className
              )}
            />
            <span
              className={classNames(
                'peer-checked:bg-white transition-all duration-200 pointer-events-none w-4 h-4 block absolute top-[2px] left-1 rounded-full bg-white',
                { 'peer-disabled:left-5': disabled },
                { 'peer-checked:left-5': !disabled }
              )}
            />
          </div>
          {label && !helperLabel && <Label name={name} htmlFor={name} text={label} className="ml-2 mb-1 text-base" />}
        </div>
        {helperLabel && (
          <HelperLabel
            name={name}
            htmlFor={name}
            helperLabelClassName={helperLabelClassName}
            title={label}
            text={description}
          />
        )}
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
