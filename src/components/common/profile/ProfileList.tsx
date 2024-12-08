import type { ProfileListProps } from '@/types/common/types';

const ProfileList = ({ srcList }: ProfileListProps) => {
  return (
    <div className='flex items-center gap-2 px-2 py-2'>
      {srcList.map((src, index) => (
        <img key={index} src={src} alt={`profile-${index}`} />
      ))}
    </div>
  );
};

export default ProfileList;
