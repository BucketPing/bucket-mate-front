import type { Bucket } from '@/types/common/types';
import CardList from './card/CardList';
import ListHeader from './ListHeader';

interface BucketCardListProps {
  header: string;
  bucketList: Bucket[];
}

const BucketCardList = ({ header, bucketList }: BucketCardListProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <ListHeader>{header}</ListHeader>
      <CardList bucketList={bucketList} />
    </div>
  );
};

export default BucketCardList;
