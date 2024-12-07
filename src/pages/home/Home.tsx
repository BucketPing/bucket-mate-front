import CardList from '@/components/home/card/CardList';
import Header from '@/components/home/list/Header';
import chevronLeft from '@/assets/icons/chevron-left.svg';
import Input from '@/components/common/Input';
import { Link, useNavigate } from 'react-router-dom';

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

  return (
    <div className='h-full'>
      <div className='h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010] p-5'>
        <div onClick={goToSearch} className='flex'>
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
      </div>
    </div>
  );
};

export default Home;
