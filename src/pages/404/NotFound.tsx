import Header from '@/components/common/Header';
import warning from '@/assets/images/warning.png';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen'>
      <Header />
      <div className='flex flex-col items-center justify-center h-full'>
        <img src={warning} alt='warning' />
        <p className='text-xl font-bold'>페이지를 찾을 수 없습니다.</p>
        <div className='mt-5 px-5 py-5 w-[328px]'>
          <Button variant='black' onClick={() => navigate('/')}>
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
