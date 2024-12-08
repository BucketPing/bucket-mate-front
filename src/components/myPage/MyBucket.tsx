import { useNavigate } from 'react-router-dom';
import BucketCardList from '../common/BucketCardList/BucketCardList';
import OngoingBucket from '../home/OngoingBucket';
import { MyPageMenu } from './MyPageMenu';
import ComingSoonModal from '../common/ComingSoonModal';
import { useModal } from '@/hooks/common/useModal';
import { mockMyPageBucketList } from '@/constants/bucketDetail/mockData';

const MyBucket = () => {
  const { showModal, portalElement, openModal, closeModal } = useModal();
  const currentBucket = mockMyPageBucketList[0];
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/bucket/${currentBucket.bucketId}`);
  };

  const goToMyBucketList = () => {
    openModal();
  };
  const goToFavoriteBucketList = () => {
    openModal();
  };
  const goToRewardList = () => {
    openModal();
  };
  const goToContact = () => {
    openModal();
  };

  return (
    <div className='flex flex-col gap-11 h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010] p-5'>
      <OngoingBucket
        bucket={currentBucket}
        onClick={goToDetail}
        isExist={!!currentBucket}
      />
      <BucketCardList header='최근 본 버킷' bucketList={mockMyPageBucketList} />
      <MyPageMenu.List>
        <MyPageMenu.Button icon='🏋️‍♀️' onClick={goToMyBucketList}>
          내 버킷 리스트
        </MyPageMenu.Button>
        <MyPageMenu.Button icon='❤️' onClick={goToFavoriteBucketList}>
          찜한 버킷 리스트
        </MyPageMenu.Button>
        <MyPageMenu.Button icon='🎁' onClick={goToRewardList}>
          리워드 목록
        </MyPageMenu.Button>
        <MyPageMenu.Button icon='🧑‍💻' onClick={goToContact}>
          문의하기
        </MyPageMenu.Button>
      </MyPageMenu.List>
      {portalElement && showModal && (
        <ComingSoonModal closeModal={closeModal} />
      )}
    </div>
  );
};

export default MyBucket;
