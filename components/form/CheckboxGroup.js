import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorMessage, HelperLabel } from '.';
import classNames from 'classnames';

export function Checkbox({
  checked,
  containerClassName,
  checkboxClassName,
  description,
  disabled,
  helperLabel,
  helperLabelClassName,
  label,
  name,
  size,
  value
}) {
  const iconName = {
    checked: {
      sm: 'bg-checked-sm',
      md: 'bg-checked-md'
    },
    'disabled-checked': {
      sm: 'bg-checked-sm-disabled',
      md: 'bg-checked-md-disabled'
    }
  };

  const { register } = useFormContext();
  const iconClass = (disabled && checked) || disabled ? 'disabled-checked' : 'checked';

  return (
    <>
      <div className="flex relative">
        <div className={classNames('flex items-center', { 'pointer-events-none': checked }, containerClassName)}>
          <input
            checked={checked}
            disabled={disabled}
            id={`checkbox-${name}-${value.toString()}`}
            className={`form-checkbox ${
              disabled || (disabled && checked)
                ? `disabled:${iconName[iconClass][size]}`
                : `checked:${iconName[iconClass][size]}`
            }
            ${size === 'md' ? 'w-5 h-5' : 'w-4 h-4'} ${checkboxClassName}`}
            type="checkbox"
            {...register(name)}
            value={value}
          />
        </div>
        {label && !helperLabel && (
          <Label
            name={name}
            className="ml-2 mb-1 "
            feedBack="FEEDBACK.NONE"
            htmlFor={`checkbox-${name}-${value.toString()}`}
            text={label}
            checked={checked}
          />
        )}
        {helperLabel && (
          <HelperLabel
            name={name}
            htmlFor={`checkbox-${name}-${value.toString()}`}
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

Checkbox.propTypes = {
  checked: PropTypes.bool,
  containerClassName: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  checkboxClassName: PropTypes.string,
  helperLabel: PropTypes.bool,
  helperLabelClassName: PropTypes.string,
  label: PropTypes.node.isRequired,
  minusIcon: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.bool
};
Checkbox.defaultProps = {
  checked: null,
  checkboxClassName: '',
  containerClassName: null,
  description: '',
  disabled: false,
  helperLabel: false,
  helperLabelClassName: null,
  label: null,
  size: 'sm',
  minusIcon: false,
  name: '',
  value: false
};

export function CheckboxGroup({
  checked,
  checkboxClassName,
  description,
  disabled,
  helperLabel,
  minusIcon,
  name,
  options,
  size
}) {
  return (
    <>
      {options.map(({ label, value }, index) => {
        if (!value || !label) return null;
        const optionLabel = label || value;
        const optionValue = value || label;
        return (
          <Checkbox
            checked={checked}
            disabled={disabled}
            checkboxClassName={checkboxClassName}
            key={index}
            minusIcon={minusIcon}
            name={name}
            size={size}
            value={optionValue}
            label={optionLabel}
            containerClassName="pb-1"
            description={description}
            helperLabel={helperLabel}
          />
        );
      })}
      <ErrorMessage name={name} />
    </>
  );
}

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};
CheckboxGroup.defaultProps = {
  options: []
};
