import ResultItem from './ResultItem';
import type { SearchResultsProps } from '@/types/search/search';

const SearchResults = ({ bucketList }: SearchResultsProps) => {
  return (
    <div className='mx-auto w-full max-w-2xl p-4'>
      <h2 className='text-xl font-medium text-gray-800 mb-4'>
        {bucketList.length > 0 && '검색결과'}
      </h2>
      {bucketList.map((v) => (
        <ResultItem bucket={v} />
      ))}
    </div>
  );
};

export default SearchResults;
