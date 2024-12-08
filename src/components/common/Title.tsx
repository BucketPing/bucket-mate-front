import { useNavigate } from 'react-router-dom';
import BucketMateLogo from '@/assets/icons/버-메.svg';

const Title = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className='px-5 py-[13px]'>
      <img
        className='cursor-pointer'
        src={BucketMateLogo}
        alt='버킷메이트 로고'
        onClick={handleLogoClick}
      />
    </div>
  );
};

export default Title;
