import CloseIcon from '@/assets/icons/close-icon.svg';
import KakaoLogo from '@/assets/icons/kakao-icon.svg';
import NaverLogo from '@/assets/icons/naver-logo.svg';
import BucketMateLogo from '@/assets/icons/버-메.svg';

const LoginModal = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black/70' />
      <div className='relative z-50 bg-white w-[355px] h-[278px] rounded-[20px] p-5 flex flex-col'>
        <div className='flex justify-between mb-3'>
          <img
            src={BucketMateLogo}
            alt='버킷메이트 로고'
            className='w-[57px] h-[34px]'
          />
          <img
            onClick={toggleModal}
            src={CloseIcon}
            alt='모달 닫기'
            className='w-[57px] h-[34px] ml-3'
          />
        </div>

        <div className='mb-8'>
          버킷메이트와 함께 <br />
          새로운 목표를 만들어봐요 🙌
        </div>
        <div>
          <button className='flex items-center justify-center w-full px-[14px] py-2 mb-2 bg-[#FEE500] rounded-[10px]'>
            <img className='mr-2' src={KakaoLogo} alt='카카오 로그인' />
            <div>카카오 로그인</div>
          </button>
          <button className='flex items-center justify-center w-full px-[14px] py-2 bg-white border border-[#E6E6EA] rounded-[10px]'>
            <img className='mr-2' src={NaverLogo} alt='네이버 로그인' />
            <div>네이버 로그인</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
