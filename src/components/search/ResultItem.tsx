import { CATEGORY_EMOJI } from '@/constants';
import type { ResultItemProps } from '@/types/search/search';

const ResultItem = ({ bucket }: ResultItemProps) => {
  const { title, participant, categories } = bucket;
  return (
    <div className='bg-[#FFFBF0] rounded-lg p-4 mb-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-lg font-medium mb-2'>{title}</h3>
          <span className='inline-block bg-pink-100 text-pink-500 rounded-full px-3 py-1 text-sm'>
            {participant.length}명 참여중
          </span>
        </div>
        <span className='text-2xl'>{CATEGORY_EMOJI[categories[0]]}</span>
      </div>
    </div>
  );
};

export default ResultItem;
