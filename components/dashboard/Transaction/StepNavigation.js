import { Button } from '@/components/index';
import Link from 'next/link';
import { WhiteCaret } from '@/public/assets/dashboard/navBarIcon';
import PropTypes from 'prop-types';

import React from 'react';

const StepNavigation = ({ handleClick, visibleStep, data }) => {
  return (
    <div className="flex justify-between items-center py-10 mt-5">
      <Button onClick={() => handleClick()} outline className={`capitalize py-2.5 px-5 text-sm  `} color="secondary">
        {visibleStep === 1 ? <Link href="/dashboard/transaction">Cancel</Link> : 'Back'}
      </Button>
      {visibleStep <= data.length - 1 && (
        <Button onClick={() => handleClick('next')} className="text-white py-2.5 px-5 capitalize">
          Save & Next
        </Button>
      )}
      {visibleStep === data.length && (
        <div className="flex items-center gap-2">
          <Button className="text-white py-2.5 px-5 capitalize" Icon={<WhiteCaret />}>
            Save as Template
          </Button>
          <Link href="/dashboard/transaction/new" passHref>
            <Button className="text-white py-2.5 px-5 capitalize">Create</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

StepNavigation.propTypes = {
  handleClick: PropTypes.func,
  data: PropTypes.array
};

StepNavigation.defaultProps = {
  handleClick: () => {},
  data: []
};
export default StepNavigation;
