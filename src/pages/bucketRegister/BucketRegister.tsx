import { useNavigate } from 'react-router-dom';
import chevronLeftSrc from '@/assets/icons/chevron-left.svg';
import BucketCard from '@/components/bucketRegister/BucketCard';

const BucketRegister = () => {
  const navigate = useNavigate();

  const bucketTitleList = [
    '아침운동 부수기!',
    '자기전 팔굽혀펴기 100개',
    '매일 이불정리 깨끗하게',
    '전공서적 꾸준히 읽기',
    '전공서적 꾸준히 읽기',
  ];

  return (
    <section className='px-5 py-3 pb-[112px] h-screen'>
      <header className='flex items-center w-[335px] h-[60px] p-[4px] gap-[10px] mb-5'>
        <button onClick={() => navigate(-1)} className='ml-3'>
          <img src={chevronLeftSrc} />
        </button>
        <div className='font-medium'>내 버킷리스트</div>
      </header>

      <div className='flex flex-col items-center gap-5 h-[70vh] overflow-scroll'>
        {bucketTitleList.map((title, index) => (
          <BucketCard key={index} title={title} />
        ))}
      </div>

      <div
        className='fixed bottom-[42px] left-1/2 transform -translate-x-1/2 text-center'
        onClick={() => navigate('/create')}
      >
        <button className='w-[165px] h-[50px] bg-gradient-to-t to-[#434252] from-[#040524] shadow-[0px_0px_20px_0px_#0000000F] text-[rgba(255,255,255,1)] rounded-3xl font-bold hover:opacity-95 transition-opacity duration-300'>
          버킷 만들기 +
        </button>
      </div>
    </section>
  );
};

export default BucketRegister;
