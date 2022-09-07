import React from 'react';
import { XIcon } from '@/public/assets/dashboard/navBarIcon';
import PropTypes from 'prop-types';
const Alert = ({ message, type }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {message && showAlert && type && (
        <div
          className={`flex items-center justify-between p-3 pr-4 mb-2 border-2 rounded-md border-${type}-500/70 bg-${type}-500/10`}
        >
          <strong className="text-sm font-medium text-secondary-700">{message}</strong>
          <button className="opacity-100" type="button" onClick={() => setShowAlert(false)}>
            <span className="sr-only"> Close </span>
            <XIcon width="11px" height="11px" />
          </button>
        </div>
      )}
    </>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['danger', 'info', 'success', 'warning'])
};
Alert.defaultProps = {
  type: 'danger'
};
export default Alert;
