import mockProfileOneSrc from '@/assets/icons/profile-1.svg';
import type { User } from '@/types/common/types';

interface BucketOwnerProps {
  userData: User;
}

const BucketOwner = ({ userData }: BucketOwnerProps) => {
  return (
    <div className='flex items-center py-4'>
      <div className='mr-2'>
        <img src={mockProfileOneSrc} />
      </div>
      <span className='font-medium'>{userData.nickname}</span>
    </div>
  );
};

export default BucketOwner;
