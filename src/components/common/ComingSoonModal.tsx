import CloseIcon from '@/assets/icons/close-icon.svg';
import BucketMateLogo from '@/assets/icons/logo.svg';
import Warning from '@/assets/images/warning.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface ComingSoonModalProps {
  closeModal: () => void;
}

const ComingSoonModal = ({ closeModal }: ComingSoonModalProps) => {
  const navigate = useNavigate();
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black/70' onClick={() => closeModal()} />
      <div className='relative z-50 bg-white w-[355px] rounded-[20px] p-5 flex flex-col'>
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
        <div className='mb-8 flex flex-col items-center gap-6'>
          <img src={Warning} alt='warning' />
          <div className='text-center'>
            <p className='font-bold text-xl'>서비스를 열심히 준비 중이에요.</p>
            <p className='text-[#919191]'>곧 만나보실 수 있어요!</p>
          </div>
        </div>
        <Button
          variant='black'
          onClick={() => {
            closeModal();
            navigate('/');
          }}
        >
          홈으로 가기
        </Button>
      </div>
    </div>
  );
};

export default ComingSoonModal;
