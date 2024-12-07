import { mockBucketData } from '@/constants/bucketDetail/mockData';
import fullHeartSrc from '@/assets/icons/full-heart.svg';
import emptyHeartSrc from '@/assets/icons/empty-heart.svg';

interface TitleProps {
  setIsHeartClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isHeartClicked: boolean;
}

const Title = ({ setIsHeartClicked, isHeartClicked }: TitleProps) => {
  return (
    <>
      <span className='bg-[rgba(193,255,174,1)] text-[rgba(51,147,22,1)] pt-1 pr-2 pb-1 pl-2 rounded-xl text-[12px] font-medium'>
        {mockBucketData.progressStatus === 0
          ? '모집중'
          : mockBucketData.progressStatus === 1
            ? '진행중'
            : '완료'}
      </span>
      <div className='flex items-center justify-between'>
        <h1 className='text-[20px] my-2 font-medium'>{mockBucketData.title}</h1>
        <div
          className='cursor-pointer'
          onClick={() => setIsHeartClicked((prev) => !prev)}
        >
          <img
            src={isHeartClicked ? fullHeartSrc : emptyHeartSrc}
            alt='하트 아이콘'
          />
        </div>
      </div>

      {/* 구분선 */}
      <hr />
    </>
  );
};

export default Title;
