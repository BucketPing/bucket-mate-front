<<<<<<< HEAD
const Home = () => {
  return <div className='bg-slate-400 h-full'>Home</div>;
=======
import { useNavigate } from 'react-router-dom';
import Banner from '@/components/home/Banner';
import Input from '@/components/common/Input';

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
      <Banner onClick={goToLogin} />
      <div className='h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010] p-5'>
        <div onClick={goToSearch} className='cursor-pointer'>
          <Input
            placeholder='같이 버킷리스트 찾아볼까요?'
            onChange={() => {}}
            onSearch={goToSearch}
            value=''
          />
        </div>
      </div>
    </div>
  );
>>>>>>> 0a55d81 (feat: Input 컴포넌트 작업 및 검색창 UI 작업)
};

export default Home;
