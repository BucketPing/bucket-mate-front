//bucket 타입이 들어갈 예정
const ResultCard = ({}: {}) => {
  return (
    <div className='bg-[#FFFBF0] h-[166px] rounded-lg p-4 mb-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-lg font-medium mb-2'>아침운동 부수기!</h3>
          <span className='inline-block bg-pink-100 text-pink-500 rounded-full px-3 py-1 text-sm'>
            128명 참여중
          </span>
        </div>
        <span className='text-2xl'>💪</span>
      </div>
    </div>
  );
};

export default ResultCard;
