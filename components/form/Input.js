import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ShowPasswordIcon, HidePasswordIcon } from '@/public/assets/signUp/passwordSvgs';
import FormIcons from './FormIcons';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';
import { showError, showSuccess } from '@/utils/form-helpers';

const Input = ({
  className,
  feedBack,
  Icon,
  leadingIcon,
  labelClassName,
  hintIcon,
  hintText,
  name,
  placeholder,
  label,
  floatLabel,
  type
}) => {
  const {
    register,
    formState: { dirtyFields, errors }
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const PasswordIcon = showPassword ? (
    <HidePasswordIcon width="18px" height="18px" fill="#A9ABAD" onClick={handleShowPassword} />
  ) : (
    <ShowPasswordIcon width="18px" height="18px" fill="#A9ABAD" onClick={handleShowPassword} />
  );
  const isPasswordField = type === 'password';
  const inputIcon = isPasswordField ? PasswordIcon : Icon;

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && (
        <Label feedBack="FEEDBACK.NONE" className="text-base" name={name} htmlFor={name} text={label} />
      )}
      <div className="relative z-0 mb-2 w-full group">
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{leadingIcon}</div>
        )}
        <input
          placeholder={placeholder ? placeholder : label}
          type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
          id={name}
          {...register(name)}
          className={classNames(
            'block py-3.5 px-1 w-full text-base bg-secondary-25 border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer',
            className,
            { 'pl-10 pr-8': leadingIcon },
            {
              'placeholder-transparent border-secondary-300 appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer':
                floatLabel
            },
            {
              errorClassName: showError(hasErrors, feedBack)
            },
            {
              successClassName: showSuccess(isValid, feedBack)
            },
            {
              focusClassName: !hasErrors && !isValid
            },
            {
              ' placeHolderClassName': placeholder
            }
          )}
        />
        {floatLabel && (
          <Label
            name={name}
            feedBack={feedBack}
            htmlFor={name}
            floatLabel
            text={label}
            floatLabelClass={labelClassName}
          />
        )}

        <FormIcons hintIcon={hintIcon} feedBack={feedBack} isValid={isValid} hasErrors={hasErrors} />
        {inputIcon && !isValid && (
          <div
            className={classNames(
              'absolute inset-y-0 right-0 flex items-center cursor-pointer',
              { 'pr-3': !isValid && !hasErrors },
              {
                'pr-8': hasErrors
              }
            )}
          >
            {inputIcon}
          </div>
        )}
      </div>
      {hintText && <p className="pt-1 text-sm text-secondary-700">{hintText}</p>}
      <ErrorMessage name={name} />
    </>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  feedBack: PropTypes.string,
  Icon: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string
  }),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  feedBack: 'FEEDBACK.ALL',
  label: null,
  type: 'text',
  placeholder: null,
  Icon: null
};
export default Input;
