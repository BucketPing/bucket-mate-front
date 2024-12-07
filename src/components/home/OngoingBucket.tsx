import type { Bucket } from '@/types/common/types';
import plusIcon from '@/assets/icons/plus.svg';

interface OngoingBucketProps {
  bucket: Bucket;
  onClick: () => void;
}

const OngoingBucket = ({ bucket, onClick }: OngoingBucketProps) => {
  const { title, startDate, endDate, progressStatus, participant } = bucket;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startDt = new Date(bucket.startDate);
  const endDt = new Date(bucket.endDate);

  const calculateDaysLeft = (): number => {
    const difference = endDt.getTime() - today.getTime();
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysLeft;
  };
  const calculateProgress = (): number => {
    const totalDuration = endDt.getTime() - startDt.getTime();
    const elapsedDuration = today.getTime() - startDt.getTime();
    const progress = Math.round((elapsedDuration / totalDuration) * 100);
    return progress;
  };

  const ONGOING = progressStatus === 1;

  const blurStyle = ONGOING ? 'blur-none' : 'blur-[6px]';

  return (
    <section className='flex flex-col gap-3'>
      <p className='text-[#919191] text-base font-bold'>🏋️‍♂️ 진행중인 버킷</p>
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
              {calculateDaysLeft()}일 남음
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-[#8d8d8d] text-sm'>참여 멤버</p>
              <div className='flex space-x-2'>
                {/* TODO: 이미지로 대체하기 */}
                {participant.map((user) => (
                  <span key={user.userId}>
                    {
                      ['🐤', '🦁', '🐶', '🐱', '🐔', '🐷', '🐴'].sort(
                        () => Math.random() - 0.5,
                      )[0]
                    }
                  </span>
                ))}
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
                    strokeDasharray={`${calculateProgress()} 100`}
                    stroke='currentColor'
                    fill='transparent'
                    r='16'
                    cx='18'
                    cy='18'
                    transform='rotate(-90 18 18)'
                  />
                </svg>
                <span className='absolute inset-0 flex items-center justify-center text-sm font-medium'>
                  {calculateProgress()}%
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
