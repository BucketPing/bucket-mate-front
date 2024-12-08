import { useState } from 'react';
import DateInput from './DateInput';

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className='pb-12'>
      <div className='py-3 px-5 flex w-full bg-[#FAFAFA] border rounded-[10px]'>
        <DateInput
          label='시작일'
          selectsStart
          selectedDate={startDate}
          onChange={setStartDate}
        />
        <DateInput
          label='종료일'
          selectsEnd
          selectedDate={endDate}
          onChange={setEndDate}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default DateRangeSelector;
