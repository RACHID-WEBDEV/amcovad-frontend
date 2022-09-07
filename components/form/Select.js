import React from 'react';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { SelectArrowIcon } from '@/public/assets/dashboard/navBarIcon';
import FormIcons from './FormIcons';
import { showError, showSuccess } from '@/utils/form-helpers';
export function SelectField({
  children,
  className,
  containerClassName,
  floatLabel,
  feedBack,
  label,
  labelClassName,
  leadingIcon,
  name,
  hintIcon,
  hintText
}) {
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
      <div className={classNames('relative z-0 mb-2 w-full group', containerClassName)}>
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{leadingIcon}</div>
        )}
        <select
          id={name}
          {...register(name)}
          className={classNames(
            'block py-3.5 px-2 w-full text-base appearance-none transition ease-in-out bg-secondary-25 border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer',
            className,
            { 'pl-10 pr-8': leadingIcon },
            {
              'mt-6 placeholder-transparent border-secondary-300 appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer':
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
            }
          )}
        >
          {children}
        </select>

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

        <div className={classNames('absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none')}>
          <SelectArrowIcon />
        </div>
        <FormIcons hintIcon={hintIcon} feedBack={feedBack} isValid={isValid} hasErrors={hasErrors} isSelect />
      </div>
      {hintText && <p className="pt-1 text-sm text-secondary-700">{hintText} </p>}
    </>
  );
}

SelectField.propTypes = {
  feedBack: PropTypes.string,
  floatLabel: PropTypes.bool,
  label: PropTypes.string,
  leadingIcon: PropTypes.node,
  name: PropTypes.string.isRequired,
  hintIcon: PropTypes.bool,
  hintText: PropTypes.string
};

SelectField.defaultProps = {
  feedBack: 'FEEDBACK.ALL',
  floatLabel: false,
  label: null,
  leadingIcon: null,
  hintIcon: false,
  hintText: null
};

const Select = ({ defaultOption, floatLabel, feedBack, label, leadingIcon, name, options, hintIcon, hintText }) => {
  return (
    <>
      <SelectField
        floatLabel={floatLabel}
        feedBack={feedBack}
        label={label ? label : defaultOption}
        leadingIcon={leadingIcon}
        name={name}
        hintIcon={hintIcon}
        hintText={hintText}
      >
        {defaultOption && (
          <option key={name} value="">
            {defaultOption}
          </option>
        )}
        {options.map(({ title, value }, id) => {
          if (!value || !title) return null;
          const optionTitle = title || value;
          const optionValue = value || title;
          return (
            <option key={id} value={optionValue}>
              {optionTitle}
            </option>
          );
        })}
      </SelectField>
      <ErrorMessage name={name} />
    </>
  );
};

export default Select;

Select.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};

Select.defaultProps = {
  defaultOption: null,
  label: null,
  options: []
};
