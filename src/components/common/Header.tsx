import { Link } from 'react-router-dom';
import BucketMateLogo from '@/assets/icons/logo.svg';

const Header = () => {
  return (
    <header className='px-5 py-3'>
      <Link to={'/search'}>
        <img src={BucketMateLogo} alt='버킷메이트 로고' />
      </Link>
    </header>
  );
};

export default Header;
