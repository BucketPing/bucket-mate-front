import type { Bucket } from '@/types/common/types';
import CardItem from './CardItem';

interface CardListProps {
  bucketList: Bucket[];
}

const CardList = ({ bucketList }: CardListProps) => {
  return (
    <div className='flex mt-3 overflow-x-auto gap-3 whitespace-nowrap [&::-webkit-scrollbar]:hidden'>
      {bucketList?.map((bucket) => (
        <CardItem key={bucket.id} bucket={bucket} />
      ))}
    </div>
  );
};

export default CardList;
