import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ErrorMessage } from '.';
import { Label, HelperLabel } from './Label';
import classNames from 'classnames';

export function Radio({
  checked,
  description,
  disabled,
  helperLabel,
  helperLabelClassName,
  label,
  name,
  radioClassName,
  size,
  value
}) {
  const iconName = {
    radio: {
      sm: 'bg-radio-sm',
      md: 'bg-radio-md'
    },
    'disabled-radio': {
      sm: 'bg-radio-sm-disabled',
      md: 'bg-radio-md-disabled'
    }
  };

  const iconClass = (disabled && checked) || disabled ? 'disabled-radio' : 'radio';
  const { register } = useFormContext();
  return (
    <>
      <div className="inline-flex items-center">
        <input
          checked={checked}
          disabled={disabled}
          className={`form-radio ${
            disabled || (disabled && checked)
              ? `disabled:${iconName[iconClass][size]}`
              : `checked:${iconName[iconClass][size]}`
          }
          ${size === 'md' ? 'w-5 h-5' : 'w-4 h-4'} ${radioClassName}`}
          id={`radio-${value}`}
          name={name}
          {...register(name)}
          type="radio"
          value={value}
        />
        {label && !helperLabel && (
          <Label
            name={name}
            className="mx-2 mb-0"
            feedBack="FEEDBACK.NONE"
            htmlFor={`radio-${value}`}
            text={label}
            checked={checked}
          />
        )}
        {helperLabel && (
          <HelperLabel
            name={name}
            htmlFor={`radio-${value}`}
            helperLabelClassName={helperLabelClassName}
            title={label}
            text={description}
            checked={checked}
          />
        )}
      </div>
    </>
  );
}
Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  radioClassName: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string
};
Radio.defaultProps = {
  checked: null,
  disabled: false,
  label: null,
  name: '',
  radioClassName: '',
  size: 'sm',
  value: ''
};

const RadioGroup = ({
  checked,
  checkIcon,
  columns,
  description,
  disabled,
  helperLabel,
  helperLabelClassName,
  name,
  options,
  radioClassName,
  size
}) => {
  return (
    <>
      <div className={classNames('flex flex-wrap ', { 'flex-col gap-2': columns })}>
        {options.map(({ label, value }, index) => {
          if (!value && !label) return null;
          const optionLabel = label || value;
          const optionValue = value || label;

          return (
            <Radio
              checked={checked}
              disabled={disabled}
              description={description}
              checkIcon={checkIcon}
              helperLabel={helperLabel}
              helperLabelClassName={helperLabelClassName}
              size={size}
              key={index}
              name={name}
              radioClassName={radioClassName}
              value={optionValue}
              label={optionLabel}
            />
          );
        })}
      </div>
      <ErrorMessage name={name} />
    </>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};
RadioGroup.defaultProps = {
  options: []
};

export default RadioGroup;
