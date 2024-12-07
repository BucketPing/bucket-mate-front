import type { Bucket } from '@/types/common/types';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';

interface CardListProps {
  bucketList: Bucket[];
}

const CardList = ({ bucketList }: CardListProps) => {
  const navigate = useNavigate();
  const goToDetail = (id: number) => {
    navigate(`/bucket/${id}`);
  };
  return (
    <div className='flex mt-3 overflow-x-auto gap-3 whitespace-nowrap [&::-webkit-scrollbar]:hidden'>
      {bucketList?.map((bucket) => (
        <CardItem
          key={bucket.id}
          bucket={bucket}
          onClick={() => goToDetail(bucket.id)}
        />
      ))}
    </div>
  );
};

export default CardList;
