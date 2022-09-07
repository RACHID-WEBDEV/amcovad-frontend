import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import HookForm from '@/components/form/Form';
import classNames from 'classnames';
import ColoredCard from '@/components/dashboard/Transaction/TransactionColoredCard';
import coloredCardData from '@/data/dashboard/transaction/coloredCard';
import StepNavigation from '@/components/dashboard/Transaction/StepNavigation';
import data from '@/data/dashboard/transaction/steps';

function Create() {
  const [visibleStep, setVisibleStep] = React.useState(data[0].id);

  const Steps = data.map((item, index) => (
    <div
      key={index}
      onClick={() => setVisibleStep(item.id)}
      className={classNames(
        'w-1/2 relative h-1 flex items-center justify-center cursor-pointer transition duration-500 ease-in-out',
        { 'bg-primary-500': visibleStep === item.id },
        { 'bg-secondary-200': visibleStep !== item.id }
      )}
    >
      <div
        className={classNames(
          'h-7 w-7 rounded-full shadow flex items-center justify-center',
          { 'bg-primary-500 ring-offset-4 ring-2 ring-primary-500': visibleStep === item.id },
          { 'bg-secondary-200': visibleStep !== item.id }
        )}
      >
        <p className="text-white">{item.id}</p>
      </div>
      <span
        className={classNames(
          'cursor-pointer absolute top-0 text-center mt-8  text-sm lg:text-base font-medium',
          { 'text-secondary-200': visibleStep === item.id },
          { 'text-secondary-600': visibleStep !== item.id }
        )}
      >
        {item.label}
      </span>
    </div>
  ));

  const Content = data.map((item, index) => (
    <div className="mt-20" key={index} style={visibleStep === item.id ? {} : { display: 'none' }}>
      {item.content}
    </div>
  ));

  const handleClick = (direction) => {
    let newStep = visibleStep;
    direction === 'next' ? newStep++ : newStep--;
    newStep > 0 && newStep <= data.length && setVisibleStep(newStep);
  };

  return (
    <>
      <DashboardLayout title="Create new Transaction">
        <div className="h-full w-full py-6 px-3">
          <div className="container">
            <div className="lg:w-full ">
              <div className="bg-secondary-700 h-1 flex items-center justify-between">{Steps}</div>
              <HookForm>{Content}</HookForm>
              <StepNavigation handleClick={handleClick} visibleStep={visibleStep} data={data} />
            </div>

            <div className=" relative ">
              <div className=" bottom-0">
                <div className="text-sm my-4">
                  <h6 className="text-secondary-700 font-Inter font-semibold leading-6 tracking-wider ">
                    Learn from Templates
                  </h6>
                  <p className="text-secondary-600 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ornare id augue leo arcu.
                  </p>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-5 ">
                  {coloredCardData.map(({ background, btnTitle, description, title, url }, index) => (
                    <ColoredCard
                      key={index}
                      background={background}
                      btnTitle={btnTitle}
                      description={description}
                      title={title}
                      url={url}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Create;
