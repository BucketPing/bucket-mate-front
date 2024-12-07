const SearchResults = () => {
  return (
    <div className='mx-auto w-full max-w-2xl p-4'>
      <h2 className='text-xl font-medium text-gray-800 mb-4'>검색결과</h2>

      {/* First Card */}
      <div className='bg-[#FFFBF0] rounded-lg p-4 mb-4'>
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

      {/* Second Card */}
      <div className='bg-[#F0FFF4] rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-lg font-medium mb-2'>아침운동 부수기!</h3>
            <span className='inline-block bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm'>
              128명 참여중
            </span>
          </div>
          <span className='text-2xl'>💪</span>
        </div>
      </div>
      <div className='w-4/5 h-px bg-gray-200 my-8 mx-auto'></div>
    </div>
  );
};

export default SearchResults;
