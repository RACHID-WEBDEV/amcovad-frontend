import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';

export function Checkbox({ containerClassName, inputClassName, label, name, value }) {
  const { register } = useFormContext();
  return (
    <>
      <div className={classNames('flex items-center', containerClassName)}>
        <input
          id={`checkbox-${name}-${value.toString()}`}
          className={classNames('appearance-none', inputClassName)}
          type="checkbox"
          {...register(name)}
          value={value}
        />

        <Label name={name} htmlFor={`checkbox-${name}-${value.toString()}`} text={label} />
      </div>
    </>
  );
}
export function CheckboxGroup({ name, options }) {
  return (
    <>
      {options.map(({ label, value }, index) => {
        if (!value || !label) return null;
        const optionLabel = label || value;
        const optionValue = value || label;
        return <Checkbox key={index} name={name} value={optionValue} label={optionLabel} containerClassName="pb-1" />;
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
  options: null
};
