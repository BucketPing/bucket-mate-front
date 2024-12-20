import CloseIcon from '@/assets/icons/close-icon.svg';
import KakaoLogo from '@/assets/icons/kakao-icon.svg';
import NaverLogo from '@/assets/icons/naver-logo.svg';
import BucketMateLogo from '@/assets/icons/logo.svg';

interface LoginModalProps {
  closeModal: () => void;
  onClickLogin: () => void;
}

const LoginModal = ({ closeModal, onClickLogin }: LoginModalProps) => {
  const handleKakaoLogin = () => {
    onClickLogin();
    closeModal();
  };

  const handleNaverLogin = () => {
    onClickLogin();
    closeModal();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black/70' onClick={() => closeModal()} />
      <div className='relative z-50 bg-white w-[355px] h-[278px] rounded-[20px] p-5 flex flex-col'>
        <div className='flex justify-between mb-3'>
          <img
            src={BucketMateLogo}
            alt='버킷메이트 로고'
            className='w-[57px] h-[34px]'
          />
          <img
            onClick={closeModal}
            src={CloseIcon}
            alt='모달 닫기'
            className='h-[34px] ml-5 cursor-pointer'
          />
        </div>

        <div className='mb-8'>
          버킷메이트와 함께 <br />
          새로운 목표를 만들어봐요 🙌
        </div>
        <div>
          <button
            className='flex items-center justify-center w-full px-[14px] py-2 mb-2 bg-[#FEE500] rounded-[10px]'
            onClick={handleKakaoLogin}
          >
            <img className='mr-2' src={KakaoLogo} alt='카카오 로그인' />
            <div>카카오 로그인</div>
          </button>
          <button
            className='flex items-center justify-center w-full px-[14px] py-2 bg-white border border-[#E6E6EA] rounded-[10px]'
            onClick={handleNaverLogin}
          >
            <img className='mr-2' src={NaverLogo} alt='네이버 로그인' />
            <div>네이버 로그인</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
