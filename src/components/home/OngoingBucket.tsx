import plusIcon from '@/assets/icons/plus.svg';
import type { Bucket } from '@/types/common/types';
import { calculateDaysLeft, calculateProgress } from '@/utils/common/date';
import ProfileList from '../common/profile/ProfileList';

interface OngoingBucketProps {
  bucket: Bucket;
  onClick: () => void;
}

const OngoingBucket = ({ bucket, onClick }: OngoingBucketProps) => {
  const { title, startDate, endDate, progressStatus, participant } = bucket;
  const today = new Date();
  const startDt = new Date(bucket.startDate);
  const endDt = new Date(bucket.endDate);

  const ONGOING = progressStatus === 1;

  const blurStyle = ONGOING ? 'blur-none' : 'blur-[6px]';

  return (
    <section className='flex flex-col gap-3'>
      <p className='text-[#626262] text-base font-bold'>
        {ONGOING ? '🏋️‍♂️ 진행중인 버킷' : '진행 중인 버킷이 없어요 🥲'}
      </p>
      <div className='relative'>
        {!ONGOING && (
          <button className='text-white font-bold px-4 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-1 rounded-full bg-gradient-to-t to-[#434252] from-[#040524]'>
            버킷 만들기
            <img src={plusIcon} alt='plus' />
          </button>
        )}
        <article
          className={`${blurStyle} bg-[#fff0fb] rounded-[10px] p-5 flex flex-col gap-3 shadow-[0px_0px_17px_0px_#00000007]`}
          onClick={onClick}
        >
          <div className='flex items-center justify-between'>
            <h2 className='text-base font-bold'>{title}</h2>
            <span className='bg-[#292A2C] font-bold text-white rounded-full px-2 py-1 ml-4 text-xs'>
              {calculateDaysLeft(endDt, today)}일 남음
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-[#8d8d8d] text-sm'>참여 멤버</p>
              <div className='flex space-x-2'>
                <ProfileList srcList={participant.map((p) => p.profile)} />
              </div>
              <p className='text-[#7b7d83] text-sm font-medium mt-3'>
                📅 {startDate} ~ {endDate}
              </p>
            </div>
            <div className='flex items-center'>
              <div className='relative w-16 h-16'>
                <svg className='absolute inset-0' viewBox='0 0 36 36'>
                  <circle
                    className='text-[#D0BECB]'
                    strokeWidth='1'
                    stroke='currentColor'
                    fill='transparent'
                    r='16'
                    cx='18'
                    cy='18'
                  />
                  <circle
                    className='text-[#292A2C]'
                    strokeWidth='1'
                    strokeDasharray={`${calculateProgress(endDt, startDt, today)} 100`}
                    stroke='currentColor'
                    fill='transparent'
                    r='16'
                    cx='18'
                    cy='18'
                    transform='rotate(-90 18 18)'
                  />
                </svg>
                <span className='absolute inset-0 flex items-center justify-center text-sm font-medium'>
                  {calculateProgress(endDt, startDt, today)}%
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OngoingBucket;
