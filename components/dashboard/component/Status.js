import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Status = ({ label, value, color }) => {
  return (
    <div className="py-2">
      <div className="flex items-center">
        <div className={classNames('w-4 h-4 rounded', color)}></div>
        <p className="text-sm text-black/60 font-Poppins font-normal pl-3 ">{label}</p>
      </div>
      <p className="text-2xl text-black pl-7 font-Poppins font-bold">{value}</p>
    </div>
  );
};

Status.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  color: PropTypes.string
};

Status.defaultProps = {
  value: null,
  color: null
};
export default Status;
