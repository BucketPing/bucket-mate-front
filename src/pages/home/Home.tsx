import { useNavigate } from 'react-router-dom';
import Banner from '@/components/home/Banner';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    //TODO:: 로그인 페이지 확인
    navigate('/login');
  };

  return (
    <div className='h-full'>
      <Banner onClick={goToLogin} />
    </div>
  );
};

export default Home;
