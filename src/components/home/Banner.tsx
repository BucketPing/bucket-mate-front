import arrowRight from '@/assets/icons/arrowRight.svg';
import type { BannerProps } from '@/types/home';

const Banner = ({ onClick }: BannerProps) => {
  return (
    <div
      className='cursor-pointer text-white rounded-xl bg-gradient-to-t to-[#434252] from-[#040524] p-4 shadow-[0px_0px_20px_0px_#0000000F] m-5'
      onClick={onClick}
    >
      <p className='text-lg font-bold pb-4'>당신의 버킷리스트가 궁금해요!</p>
      <div className='w-full'>
        <div className='flex items-center border-b-[1px] border-white w-fit ml-auto'>
          <p className='font-bold text-sm'>시작하기</p>
          <img src={arrowRight} alt='arrow-right' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
