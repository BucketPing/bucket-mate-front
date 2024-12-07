import { mockBucketData } from '@/constants/bucketDetail/mockData';

const Category = () => {
  return (
    <div className='flex text-[rgba(41,42,44,1)] text-[14px] mb-2'>
      {mockBucketData.categories.map((c) => (
        <div
          className='mr-3 my-3 px-3 py-1 bg-[rgba(251,251,251,1)] border rounded-2xl'
          key={c}
        >
          {c}
        </div>
      ))}
    </div>
  );
};

export default Category;
