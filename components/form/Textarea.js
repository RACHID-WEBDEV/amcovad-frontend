import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';
import FormIcons from './FormIcons';
import { showError, showSuccess } from '@/utils/form-helpers';

const Textarea = ({
  className,
  floatLabel,
  feedBack,
  label,
  leadingIcon,
  labelClassName,
  name,
  placeholder,
  rows,
  hintIcon,
  hintText
}) => {
  const {
    register,
    formState: { dirtyFields, errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && (
        <Label feedBack="FEEDBACK.NONE" className="text-base" name={name} htmlFor={name} text={label} />
      )}

      <div className="relative z-0 mb-2 w-full group">
        {leadingIcon && (
          <div className="absolute top-5 left-0 flex items-center pl-3 pointer-events-none">{leadingIcon}</div>
        )}
        <textarea
          rows={rows}
          placeholder={placeholder ? placeholder : label}
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
        ></textarea>

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

        <FormIcons hintIcon={hintIcon} feedBack={feedBack} isValid={isValid} hasErrors={hasErrors} isTextArea />
      </div>

      {hintText && <p className="pt-1 text-sm text-secondary-700">{hintText}</p>}
      <ErrorMessage name={name} />
    </>
  );
};
Textarea.propTypes = {
  className: PropTypes.string,
  feedBack: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.string,
  placeholder: PropTypes.string
};

Textarea.defaultProps = {
  className: null,
  feedBack: 'FEEDBACK.ALL',
  label: null,
  rows: '3',
  labelClassName: 'bg-secondary-25 peer-focus:bg-secondary-25 -translate-y-7 peer-focus:-translate-y-7',
  placeholder: null
};
export default Textarea;
