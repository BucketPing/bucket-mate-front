import BucketCardList from '../common/BucketCardList/BucketCardList';
import OngoingBucket from '../home/OngoingBucket';
import { MyPageMenu } from './MyPageMenu';
import ComingSoonModal from '../common/ComingSoonModal';
import { useModal } from '@/hooks/common/useModal';
import mockProfileOneSrc from '@/assets/icons/profile-1.svg';
import mockProfileTwoSrc from '@/assets/icons/profile-2.svg';
import mockProfileThreeSrc from '@/assets/icons/profile-3.svg';
import mockProfileFourSrc from '@/assets/icons/profile-4.svg';
import mockProfileFiveSrc from '@/assets/icons/profile-5.svg';
import mockProfileSixSrc from '@/assets/icons/profile-6.svg';
import type { Bucket } from '@/types/common/types';

const sampleBucketList: Bucket[] = [
  {
    id: 1,
    ownerId: 1,
    categories: ['운동'],
    title: '아침운동 부수기!',
    description: '아침운동 부수기!',
    participant: [
      { userId: 1, nickname: '깔로스', profile: mockProfileOneSrc },
      { userId: 2, nickname: '네모', profile: mockProfileTwoSrc },
      { userId: 3, nickname: '새힘', profile: mockProfileSixSrc },
      { userId: 4, nickname: '해나', profile: mockProfileFiveSrc },
      { userId: 5, nickname: '와이', profile: mockProfileFourSrc },
      { userId: 6, nickname: '허블', profile: mockProfileThreeSrc },
      { userId: 7, nickname: '우디', profile: mockProfileOneSrc },
    ],
    maxCapacity: 10,
    progressStatus: 1,
    startDate: '2024.10.01',
    endDate: '2025.6.02',
    createdAt: '2024.11.07',
  },
  {
    id: 2,
    ownerId: 2,
    categories: ['여행'],
    title: '부모님이랑 여행가서 맛집가고 쇼핑하고 야식먹고 잠자기!',
    description: '아침운동 부수기!',
    participant: [
      { userId: 1, nickname: '홍길동', profile: mockProfileThreeSrc },
      { userId: 2, nickname: '김철수', profile: mockProfileFourSrc },
    ],
    maxCapacity: 10,
    progressStatus: 1,
    startDate: '2024.10.01',
    endDate: '2025.6.02',
    createdAt: '2024.11.07',
  },
  {
    id: 3,
    ownerId: 3,
    categories: ['학습'],
    title: '맛집 탐방하기!',
    description: '아침운동 부수기!',
    participant: [
      { userId: 1, nickname: '홍길동', profile: mockProfileOneSrc },
      { userId: 2, nickname: '김철수', profile: mockProfileTwoSrc },
    ],
    maxCapacity: 10,
    progressStatus: 1,
    startDate: '2024.10.01',
    endDate: '2025.6.02',
    createdAt: '2024.11.07',
  },
  {
    id: 3,
    ownerId: 3,
    categories: ['학습'],
    title: '맛집 탐방하기!',
    description: '아침운동 부수기!',
    participant: [
      { userId: 1, nickname: '홍길동', profile: mockProfileFiveSrc },
      { userId: 2, nickname: '김철수', profile: mockProfileSixSrc },
    ],
    maxCapacity: 10,
    progressStatus: 1,
    startDate: '2024.10.01',
    endDate: '2025.6.02',
    createdAt: '2024.11.07',
  },
];

const MyBucket = () => {
  const { showModal, portalElement, openModal, closeModal } = useModal();
  const currentBucket = sampleBucketList[0];

  const goToDetail = () => {};
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
      <BucketCardList header='최근 본 버킷' bucketList={sampleBucketList} />
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
