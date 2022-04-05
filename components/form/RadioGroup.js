import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ErrorMessage } from '.';
import { Label } from './Label';

export function Radio({ name, label, value }) {
  const { register } = useFormContext();
  return (
    <>
      <div className="flex items-center my-1 space-x-1 text-[20px] mr-2 ">
        <input
          className="cursor-pointer h-5 w-5"
          id={`radio-${value}`}
          name={name}
          {...register(name)}
          type="radio"
          value={value}
        />
        <Label name={name} htmlFor={`radio-${value}`} text={label} />
      </div>
    </>
  );
}

Radio.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  value: PropTypes.any
};
Radio.defaultProps = {
  name: null,
  value: null
};
const RadioGroup = ({ column, name, options }) => {
  const hasColumn = column ? 'flex-col mb-2' : '';
  return (
    <>
      <div className={` flex flex-wrap ${hasColumn} `}>
        {options.map(({ label, value }, index) => {
          if (!value && !label) return null;
          const optionLabel = label || value;
          const optionValue = value || label;

          return <Radio key={index} name={name} value={optionValue} label={optionLabel} />;
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
