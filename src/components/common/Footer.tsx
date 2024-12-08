import { Link, useLocation, useNavigate } from 'react-router-dom';
import home from '@/assets/icons/home.svg';
import homeFill from '@/assets/icons/home_fill.svg';
import person from '@/assets/icons/person.svg';
import personFill from '@/assets/icons/person_fill.svg';
import { useModal } from '@/hooks/common/useModal';
import LoginModal from './LoginModal';

const Footer = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const { showModal, portalElement, openModal, closeModal } = useModal();
  const isHome = pathname === '/';
  const isMypage = pathname === '/mypage';

  const menuStyle = 'flex flex-col gap-1 w-full items-center py-3';

  const iconStyle = (isActive: boolean) => {
    return isActive ? 'bg-[#DEF1FF]' : 'bg-transparent';
  };

  const textStyle = (isActive: boolean) => {
    return isActive ? 'text-black' : 'text-[#91919180]';
  };

  const handlerLoginButton = () => {
    sessionStorage.setItem('userId', '1');
    navigate('/mypage');
  };

  return (
    <footer className='sticky bottom-0 w-full bg-white border-t flex gap-2'>
      <Link to={'/'} className={menuStyle}>
        <div className={`rounded-full ${iconStyle(isHome)} px-5 py-1`}>
          <img src={isHome ? homeFill : home} alt='home' className='w-6' />
        </div>
        <p className={`text-xs ${textStyle(isHome)}`}>홈</p>
      </Link>
      <Link
        to={'/mypage'}
        className={menuStyle}
        onClick={(e) => {
          if (!sessionStorage.getItem('userId')) {
            e.preventDefault();
            openModal();
          }
        }}
      >
        <div className={`rounded-full ${iconStyle(isMypage)} px-5 py-1`}>
          <img
            src={isMypage ? personFill : person}
            alt='home'
            className='w-6'
          />
        </div>
        <p className={`text-xs ${textStyle(isMypage)}`}>마이페이지</p>
      </Link>
      {portalElement && showModal && (
        <LoginModal closeModal={closeModal} onClickLogin={handlerLoginButton} />
      )}
    </footer>
  );
};

export default Footer;
