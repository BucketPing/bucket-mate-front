import { mockBucketData } from '@/constants/bucketDetail/mockData';

const Duration = () => {
  return (
    <div className='bg-[rgba(246,246,246,1)] my-3 inline-block px-2 py-1 text-[14px] rounded-md'>
      <span className='text-[rgba(123,125,131,1)] mr-2'>기간</span>
      <span className='text-[rgba(41,42,44,1)] font-medium'>
        {mockBucketData.startDate} ~ {mockBucketData.endDate}
      </span>
    </div>
  );
};

export default Duration;
