import CardList from '@/components/home/card/CardList';
import Header from '@/components/home/list/Header';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '@/components/home/Banner';
import Input from '@/components/common/Input';
import OngoingBucket from '@/components/home/OngoingBucket';
import chevronLeft from '@/assets/icons/chevron-left.svg';
import { useModal } from '@/hooks/common/useModal';
import LoginModal from '@/components/common/LoginModal';

const Home = () => {
  const navigate = useNavigate();
  const { showModal, portalElement, openModal, closeModal } = useModal();

  const goToSearch = () => {
    //TODO:: 검색 페이지 확인
    // navigate('/search');
  };

  const goToDetail = () => {
    //navigate('/bucket/{id}')
  };

  return (
    <div className='h-full'>
      <Banner onClick={() => openModal()} />
      <div className='h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010] p-5'>
        <div onClick={goToSearch} className='flex cursor-pointer'>
          <Link to='/'>
            <img src={chevronLeft} className='bg-red-500' />
          </Link>
          <Input
            placeholder='같이 버킷리스트 찾아볼까요?'
            onChange={() => {}}
            onSearch={goToSearch}
            value=''
          />
        </div>
        <Header>🔥 인기 버킷리스트</Header>
        <CardList />
        <OngoingBucket
          bucket={{
            id: 1,
            ownerId: 1,
            category: '운동',
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
      {portalElement && showModal && <LoginModal closeModal={closeModal} />}
    </div>
  );
};

export default Home;
