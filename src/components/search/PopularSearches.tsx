import PopularSearchKeyword from '@/components/search/PopularSearchKeyword';

const PopularSearches = () => {
  const keywords = [
    '스카이다이빙',
    '오운완',
    '아침식사',
    '금연',
    '아침운동',
    '이불개기',
    '세계여행',
    '한달살이',
  ];

  return (
    <div className='w-full'>
      <h2 className='text-lg text-center font-medium mb-8'>
        인기있는 검색어에요
      </h2>
      <div className='flex flex-wrap gap-2 justify-center'>
        {keywords.map((keyword) => (
          <div key={keyword} className='mt-4'>
            <PopularSearchKeyword keyword={keyword} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
