import { mockUserData } from '@/constants/bucketDetail/mockData';
import mockProfileOneSrc from '@/assets/icons/profile-1.svg';

const BucketOwner = () => {
  return (
    <div className='flex items-center py-4'>
      <div className='mr-2'>
        <img src={mockProfileOneSrc} />
      </div>
      <span className='font-medium'>{mockUserData.nickname}</span>
    </div>
  );
};

export default BucketOwner;
