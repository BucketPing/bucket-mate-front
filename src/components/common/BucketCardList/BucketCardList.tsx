import type { Bucket } from '@/types/common/types';
import CardList from './card/CardList';
import ListHeader from './ListHeader';
import { useModal } from '@/hooks/common/useModal';
import ComingSoonModal from '../ComingSoonModal';

interface BucketCardListProps {
  header: string;
  bucketList: Bucket[];
}

const BucketCardList = ({ header, bucketList }: BucketCardListProps) => {
  const { showModal, portalElement, openModal, closeModal } = useModal();
  const handlerOnEntireClick = () => {
    openModal();
  };
  return (
    <>
      <div className='flex flex-col gap-3'>
        <ListHeader onEntireClick={handlerOnEntireClick}>{header}</ListHeader>
        <CardList bucketList={bucketList} />
      </div>
      {portalElement && showModal && (
        <ComingSoonModal closeModal={closeModal} />
      )}
    </>
  );
};

export default BucketCardList;
