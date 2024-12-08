import { mockBucketData } from '@/constants/bucketDetail/mockData';
import { dummyProfileSrc } from '@/constants/bucketDetail/mockData';
import arrowDownSrc from '@/assets/icons/arrow-down.svg';
import arrowUpSrc from '@/assets/icons/arrow-up.svg';
import type { Bucket } from '@/types/common/types';

interface JoinMembersProps {
  bucketData: Bucket;
  setIsExpandBtnClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isExpandBtnClicked: boolean;
}

const JoinMember = ({
  bucketData,
  setIsExpandBtnClicked,
  isExpandBtnClicked,
}: JoinMembersProps) => {
  return (
    <section className='bg-[rgba(250,247,240,1)] p-4 rounded-2xl relative'>
      <div className='flex justify-between items-center text-[14px] pb-3'>
        <div className='px-2 py-1'>참여 멤버</div>
        <div className='px-2 py-1 bg-white rounded-2xl'>
          <span className='text-[rgba(219,206,178,1)]'>총</span>
          <span className='text-[rgba(161,147,113,1)] font-medium'>
            {mockBucketData.participant.length}명
          </span>
        </div>
      </div>

      <div
        className='cursor-pointer absolute top-[60px] right-[20px]'
        onClick={() => setIsExpandBtnClicked((prev) => !prev)}
      >
        <img src={isExpandBtnClicked ? arrowUpSrc : arrowDownSrc} />
      </div>

      <div className='text-[14px]'>
        {isExpandBtnClicked ? (
          <div>
            {mockBucketData.participant.map((p) => (
              <div
                key={p.participantId}
                className='flex items-center gap-2 px-2 py-2'
              >
                <div>
                  <img
                    src={dummyProfileSrc[p.participantId - 1].profile}
                    alt='profile'
                  />
                </div>
                <span>{dummyProfileSrc[p.participantId - 1].nickname}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex gap-1 px-2'>
            {mockBucketData.participant.map((p) => (
              <div key={p.participantId}>
                <img
                  src={dummyProfileSrc[p.participantId - 1].profile}
                  alt='profile'
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinMember;
