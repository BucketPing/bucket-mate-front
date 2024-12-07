const PopularSearchKeyword = ({ keyword }: { keyword: string }) => {
  return (
    <button className='px-4 py-2 rounded-full bg-white border border-gray-200 text-sm hover:bg-gray-50'>
      {keyword}
    </button>
  );
};

export default PopularSearchKeyword;
