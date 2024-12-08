import { useState } from 'react';

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <>
      <div className='pb-12'>
        <div className='flex justify-between items-centerw-full bg-[#FAFAFA] border rounded-[10px] py-3 pl-5 pr-32'>
          <div className='flex flex-col font-medium text-sm border-r border-[#EBEDF1]'>
            <span className='text-[#7B7D83]'>시작일</span>
            <input
              id='data'
              type='date'
              max='2025-12-12'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className='border-none outline-none bg-transparent text-[#292A2C] font-bold text-sm'
            />
          </div>
          <div className='flex flex-col font-medium text-sm'>
            <span className='text-[#7B7D83]'>종료일</span>
            <input
              id='data'
              type='date'
              max='2025-12-12'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className='border-none outline-none bg-transparent text-[#292A2C] font-bold text-sm'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateRangeSelector;
