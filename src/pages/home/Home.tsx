import { useNavigate } from 'react-router-dom';
import Banner from '@/components/home/Banner';
import Input from '@/components/common/Input';
import OngoingBucket from '@/components/home/OngoingBucket';
import { useModal } from '@/hooks/common/useModal';
import { useGetHotBucketList } from '@/hooks/home/useGetBucketList';
import LoginModal from '@/components/common/LoginModal';
import BucketCardList from '@/components/common/BucketCardList/BucketCardList';

const Home = () => {
  const navigate = useNavigate();
  const { showModal, portalElement, openModal, closeModal } = useModal();

  const { data: hotBucketList, isFetching } = useGetHotBucketList();

  const goToSearch = () => {
    navigate('/search');
  };

  const goToDetail = (id: number) => {
    navigate(`/bucket/${id}`);
  };

  return (
    <div className='h-full'>
      <Banner
        onClick={() => {
          sessionStorage.getItem('userId') ? navigate('/create') : openModal();
        }}
      />
      <div className='flex flex-col gap-5  h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010] p-5'>
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
          bucketList={isFetching ? [] : hotBucketList?.buckets || []}
        />
        <BucketCardList
          header='🗓️ 지난주 급상승 키워드'
          bucketList={isFetching ? [] : hotBucketList?.buckets || []}
        />
        <OngoingBucket
          bucket={{
            bucketId: 1,
            ownerId: 1,
            categories: ['운동'],
            title: '아침운동 부수기!',
            description: '아침운동 부수기!',
            participant: [
              {
                id: 1,
                bucketId: 1,
                participantId: 1,
              },
              {
                id: 2,
                bucketId: 2,
                participantId: 2,
              },
              {
                id: 3,
                bucketId: 3,
                participantId: 3,
              },
              {
                id: 4,
                bucketId: 4,
                participantId: 4,
              },
            ],
            maxCapacity: 10,
            progressStatus: 1,
            startDate: '2024.10.01',
            endDate: '2025.6.02',
            createdAt: '2024.11.07',
          }}
          isExist={!!hotBucketList?.buckets?.[0]}
          onClick={() => goToDetail(1)}
        />
      </div>
      {!sessionStorage.getItem('userId') && portalElement && showModal && (
        <LoginModal
          closeModal={closeModal}
          onClickLogin={() => {
            sessionStorage.setItem('userId', '1');
            navigate('/create');
          }}
        />
      )}
    </div>
  );
};

export default Home;
