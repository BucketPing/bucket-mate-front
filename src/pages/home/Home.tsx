import { useNavigate } from 'react-router-dom';
import Banner from '@/components/home/Banner';
import Input from '@/components/common/Input';
import OngoingBucket from '@/components/home/OngoingBucket';
import BucketCardList from '@/components/common/BucketCardList/BucketCardList';
import type { Bucket } from '@/types/common/types';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    //TODO:: 로그인 페이지 확인
    navigate('/login');
  };

  const goToSearch = () => {
    //TODO:: 검색 페이지 확인
    // navigate('/search');
  };

  const goToDetail = () => {
    //navigate('/bucket/{id}')
  };

  const bucketListSample: Bucket[] = [
    {
      id: 1,
      ownerId: 1,
      categories: ['운동'],
      title: '아침운동 부수기!',
      description: '아침운동 부수기!',
      participant: [
        { userId: 1, nickname: '홍길동', profile: '' },
        { userId: 2, nickname: '김철수', profile: '' },
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
      title: '부모님이랑 여행가기!',
      description: '아침운동 부수기!',
      participant: [
        { userId: 1, nickname: '홍길동', profile: '' },
        { userId: 2, nickname: '김철수', profile: '' },
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
        { userId: 1, nickname: '홍길동', profile: '' },
        { userId: 2, nickname: '김철수', profile: '' },
      ],
      maxCapacity: 10,
      progressStatus: 1,
      startDate: '2024.10.01',
      endDate: '2025.6.02',
      createdAt: '2024.11.07',
    },
  ];

  return (
    <div className='h-full'>
      <Banner onClick={goToLogin} />
      <div className='flex flex-col gap-5 h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010] p-5'>
        <div onClick={goToSearch} className='flex cursor-pointer'>
          <Input
            placeholder='같이 버킷리스트 찾아볼까요?'
            onChange={() => {}}
            onSearch={goToSearch}
            value=''
          />
        </div>
        <BucketCardList
          header='🔥 인기 버킷리스트'
          bucketList={bucketListSample}
        />
        <BucketCardList
          header='🗓️ 지난주 급상승 키워드'
          bucketList={bucketListSample}
        />
        <OngoingBucket
          bucket={{
            id: 1,
            ownerId: 1,
            categories: ['운동'],
            title: '아침운동 부수기!',
            description: '아침운동 부수기!',
            participant: [
              { userId: 1, nickname: '홍길동', profile: '' },
              { userId: 2, nickname: '김철수', profile: '' },
            ],
            maxCapacity: 10,
            progressStatus: 1,
            startDate: '2024.10.01',
            endDate: '2025.6.02',
            createdAt: '2024.11.07',
          }}
          onClick={goToDetail}
        />
      </div>
    </div>
  );
};

export default Home;
