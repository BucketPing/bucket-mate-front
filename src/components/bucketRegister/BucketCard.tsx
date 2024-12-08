import { mockBucketData } from '@/constants/bucketDetail/mockData';
import mockProfileOneSrc from '@/assets/icons/profile-1.svg';
import mockProfileTwoSrc from '@/assets/icons/profile-2.svg';
import mockProfileThreeSrc from '@/assets/icons/profile-3.svg';
import mockProfileFourSrc from '@/assets/icons/profile-4.svg';
import mockProfileFiveSrc from '@/assets/icons/profile-5.svg';
import mockProfileSixSrc from '@/assets/icons/profile-6.svg';

interface BucketCardProps {
  title: string;
}

const profileImgList = [
  mockProfileOneSrc,
  mockProfileTwoSrc,
  mockProfileThreeSrc,
  mockProfileFourSrc,
  mockProfileFiveSrc,
  mockProfileSixSrc,
];

const BucketCard = ({ title }: BucketCardProps) => {
  const bucketStatusStyle =
    title === '매일 이불정리 깨끗하게' || title === '전공서적 꾸준히 읽기'
      ? 'bg-[rgba(41,42,44,1)] text-[rgba(255,255,255,1)]'
      : 'bg-[rgba(193,255,174,1)] text-[rgba(51,147,22,1)]';

  return (
    <div className='border w-[355px] h-[206px] p-[20px] rounded-xl'>
      <header className='flex justify-between pb-3'>
        <div className='font-medium text-[16px]'>{title}</div>
        <span
          className={`${bucketStatusStyle} pt-1 pr-2 pb-1 pl-2 rounded-xl text-[12px] font-semibold`}
        >
          {title === '매일 이불정리 깨끗하게' ||
          title === '전공서적 꾸준히 읽기'
            ? '완료'
            : '진행중'}
          {/* {mockBucketData.progressStatus === 0
            ? '모집중'
            : mockBucketData.progressStatus === 1
              ? '진행중'
              : '완료'} */}
        </span>
      </header>

      <div className='flex items-center justify-between'>
        <div>
          <div className='text-[14px] text-[rgba(141,141,141,1)]'>
            참여 멤버
          </div>
          <div className='flex gap-1 py-2'>
            {mockBucketData.participant.map((p, index) => (
              <div key={p.bucketId}>
                <img src={profileImgList[index]} />
              </div>
            ))}
          </div>
          <div className='text-[rgba(123,125,131,1)] text-[14px]'>
            🗓️ {mockBucketData.startDate} ~ {mockBucketData.endDate}
          </div>
        </div>
        <div className='w-[66px] h-[66px] rounded-full flex items-center justify-center border-[2px] border-[rgba(30,217,42,1)] text-[rgba(30,217,42,1)]'>
          100%
        </div>
      </div>

      <div className='flex justify-between mt-5 text-[14px]'>
        <div className='text-[rgba(231,48,48,1)] w-full text-center cursor-pointer'>
          삭제
        </div>
        <span>|</span>
        <div className='text-[rgba(123,125,131,1)] w-full text-center cursor-pointer'>
          편집
        </div>
      </div>
    </div>
  );
};

export default BucketCard;
