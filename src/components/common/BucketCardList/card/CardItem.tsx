import type { Bucket } from '@/types/common/types';

interface CardItemProps {
  bucket: Bucket;
}

const CardItem = ({ bucket }: CardItemProps) => {
  return (
    <div className='flex w-[138px] h-[186px] px-3 py-5 rounded-[10px] bg-[#FFFCE9] cursor-pointer shrink- flex-col justify-between'>
      <div>
        <h1 className='text-base font-bold tracking-[0.006em] text-left'>
          {bucket.title}
        </h1>
        <span className='px-2 py-1 bg-[#FFEBEB] rounded-[4px] text-[#F84343] text-xs font-medium'>
          {bucket.participant.length}명 참여중!
        </span>
      </div>
      <p className='flex text-[44px] leading-[60px] flex-row-reverse'>
        <span>🥰</span>
      </p>
    </div>
  );
};

export default CardItem;
