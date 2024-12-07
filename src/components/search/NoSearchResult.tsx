const NoSearchResults = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-8'>
      <p className='text-gray-500 text-lg my-8'>검색 결과가 없어요</p>
      <div className='w-4/5 h-px bg-gray-200 my-8'></div>
    </div>
  );
};

export default NoSearchResults;
