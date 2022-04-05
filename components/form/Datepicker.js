import React from 'react';
import { DatePicker } from 'rsuite';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '.';

const Datepicker = ({ name }) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            size="lg"
            oneTap
            format="dd-MM-yyyy"
            isoWeek
            appearance="default"
            placeholder="Pick a Date options"
            style={{ width: '100%' }}
            value={field.value}
            onChange={(e) => field.onChange(e)}
          />
        )}
      />
      <ErrorMessage name={name} />
    </>
  );
};

export default Datepicker;
