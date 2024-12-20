import { useNavigate } from 'react-router-dom';

const JoinBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/bucket-register')}
      className='w-full bg-[rgba(0,115,255,1)] text-[16px] text-center font-medium text-white py-3 rounded-xl cursor-pointer'
    >
      지금 참여하기
    </div>
  );
};

export default JoinBtn;
