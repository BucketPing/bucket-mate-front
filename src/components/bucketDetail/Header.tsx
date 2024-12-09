import { useNavigate } from 'react-router-dom';
import chevronLeftSrc from '@/assets/icons/chevron-left.svg';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <button onClick={() => navigate(-1)}>
        <img src={chevronLeftSrc} />
      </button>
    </header>
  );
};

export default Header;
