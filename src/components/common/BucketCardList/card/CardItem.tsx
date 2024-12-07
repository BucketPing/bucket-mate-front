import { CARD_COLOR, CATEGORY_EMOJI } from '@/constants';
import type { Bucket } from '@/types/common/types';

interface CardItemProps {
  bucket: Bucket;
  onClick?: () => void;
}

const CardItem = ({ bucket, onClick }: CardItemProps) => {
  const cardBgColor = CARD_COLOR[bucket.categories[0]].bgColor;
  const cardTextColor = CARD_COLOR[bucket.categories[0]].textColor;
  const cardChipColor = CARD_COLOR[bucket.categories[0]].chipColor;

  return (
    <div
      className={`w-[138px] h-[186px] px-3 py-5 rounded-[10px] ${cardBgColor} cursor-pointer flex shrink- flex-col justify-between`}
      onClick={onClick}
    >
      <div>
        <p className='text-base font-bold tracking-[0.006em] text-left m-auto truncate'>
          {bucket.title}
        </p>
        <span
          className={`px-2 py-1 ${cardChipColor} rounded-[4px] ${cardTextColor} text-xs font-medium`}
        >
          {bucket.participant.length}명 참여중!
        </span>
      </div>
      <p className='flex text-[44px] leading-[60px] flex-row-reverse'>
        <span>{CATEGORY_EMOJI[bucket.categories[0]]}</span>
      </p>
    </div>
  );
};

export default CardItem;
