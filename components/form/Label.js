import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { showError, showSuccess } from '@/utils/form-helpers';

export function Label({ className, checked, feedBack, floatLabel, floatLabelClass, htmlFor, name, text }) {
  const {
    formState: { dirtyFields, errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <label
      htmlFor={htmlFor || name}
      className={classNames(
        'font-Inter',
        {
          'absolute text-sm text-secondary-700 duration-300 transform p-2 scale-75 top-2 left-2 z-10 origin-[0] peer-focus:left-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 ':
            floatLabel
        },
        { 'pointer-events-none': checked },
        { 'block mb-2 cursor-pointer text-secondary-700 font-normal ': !floatLabel },
        { [className]: !floatLabel },
        { [floatLabelClass]: floatLabel },
        { 'text-success-600': showSuccess(isValid, feedBack) },
        { 'text-secondary-800': !hasErrors && !isValid },
        { 'text-danger-500': showError(hasErrors, feedBack) }
      )}
    >
      {text}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  feedBack: PropTypes.string,
  floatLabel: PropTypes.any,
  floatLabelClass: PropTypes.string,
  htmlFor: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.node
};

Label.defaultProps = {
  className: 'text-xs',
  feedBack: 'FEEDBACK.ALL',
  floatLabel: null,
  floatLabelClass: 'bg-secondary-25 peer-focus:bg-secondary-25 -translate-y-7 peer-focus:-translate-y-7',
  htmlFor: null,
  name: null,
  text: null
};

export const HelperLabel = ({ checked, helperLabelClassName, htmlFor, name, text, title }) => {
  return (
    <div className="ml-2 pt-2 text-sm font-Inter">
      {title && (
        <label
          htmlFor={htmlFor || name}
          className={classNames(
            'font-semibold text-secondary-800 ',
            { 'pointer-events-none': checked },
            helperLabelClassName
          )}
        >
          {title}
        </label>
      )}
      {text && (
        <p id={htmlFor || name} className="text-xs font-normal text-secondary-600 ">
          {text}
        </p>
      )}
    </div>
  );
};

HelperLabel.propTypes = {
  helperLabelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.node
};

HelperLabel.defaultProps = {
  helperLabelClassName: null,
  htmlFor: null,
  name: null,
  text: null,
  title: null
};
