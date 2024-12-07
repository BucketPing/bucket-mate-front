const NoSearchResults = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-12'>
      <p className='text-gray-500 text-lg'>검색 결과가 없어요</p>
      <div className='w-full h-px bg-gray-200 my-6'></div>
    </div>
  );
};

export default NoSearchResults;
