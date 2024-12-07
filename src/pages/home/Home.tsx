import arrowRight from '@/assets/icons/arrowRight.svg';

const Home = () => {
  return (
    <div className='h-full'>
      <div className='text-white rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4'>
        <p className='text-xl font-bold'>당신의 버킷리스트가 궁금해요!</p>
        <div className='flex items-center border-b-[1px] border-white w-fit'>
          <p className='font-bold'>시작하기</p>
          <img src={arrowRight} alt='arrow-right' />
        </div>
      </div>
    </div>
  );
};

export default Home;
