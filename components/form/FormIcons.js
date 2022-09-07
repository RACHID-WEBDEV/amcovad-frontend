import React from 'react';
import classNames from 'classnames';
import { HelpIcon, HintIcon, SuccessIcon } from '@/public/assets/dashboard/navBarIcon';

const FormIcons = ({ feedBack, hintIcon, isValid, hasErrors, isTextArea, isSelect }) => {
  return (
    <>
      {hintIcon && !isValid && (
        <div
          className={classNames(
            'absolute right-0 flex items-center pointer-events-none',
            { 'top-5': isTextArea },
            { 'inset-y-0': !isTextArea },
            { 'pr-3': !isValid && !hasErrors && !isSelect },
            {
              'pr-8': hasErrors && !isSelect
            },
            { hidden: hintIcon === hasErrors && isSelect },
            { 'pr-8': !hasErrors && isSelect }
          )}
        >
          <HintIcon />
        </div>
      )}

      {hasErrors && (
        <div
          className={classNames(
            'absolute right-0 flex items-center pointer-events-none',
            { 'top-5': isTextArea },
            { 'inset-y-0': !isTextArea },
            { 'pr-3': !isSelect },
            { 'pr-8': isSelect }
          )}
        >
          <HelpIcon />
        </div>
      )}

      {isValid && (feedBack === 'FEEDBACK.SUCCESS' || feedBack === 'FEEDBACK.ALL') && (
        <div
          className={classNames(
            'absolute right-0 flex items-center pointer-events-none',
            { 'top-5': isTextArea },
            { 'inset-y-0': !isTextArea },
            { 'pr-3': !isSelect },
            { 'pr-8': isSelect }
          )}
        >
          <SuccessIcon />
        </div>
      )}
    </>
  );
};

export default FormIcons;
