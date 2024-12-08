import chevronLeft from '@/assets/icons/chevron-left.svg';
import Input from '@/components/common/Input';
import NoSearchResults from '@/components/search/NoSearchResult';
import PopularSearches from '@/components/search/PopularSearches';
import SearchResults from '@/components/search/SearchResults';
import { useDebounce } from '@/hooks/common/useDebounce';
import type { SearchBucketList } from '@/types/search/search';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300);
  const fetchData = async (): Promise<SearchBucketList> => {
    const response = await fetch('/mockSearchBucketList.json'); // JSON 파일 경로
    const data = await response.json();
    return data;
  };

  const useGetBucketList = () => {
    return useQuery({
      queryKey: ['bucketList'],
      queryFn: fetchData,
    });
  };

  const { data, isFetching } = useGetBucketList();

  const filteredData = useMemo(() => {
    return debouncedSearchValue !== '' ? data?.results : [];
  }, [debouncedSearchValue]);

  const mappedData = useMemo(() => {
    console.log(filteredData);
    return filteredData ? (
      <SearchResults bucketList={filteredData} />
    ) : (
      <NoSearchResults />
    );
  }, [filteredData]);

  return (
    <div className='h-full'>
      <div className='h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010]'>
        <div className='flex items-center p-5'>
          <Link to='/'>
            <img src={chevronLeft} className='bg-red hover:fill-slate-400' />
          </Link>
          <Input
            placeholder='같이 버킷리스트 찾아볼까요?'
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={() => {}}
            value={searchValue}
          />
        </div>
        {isFetching ? <div>Loading...</div> : mappedData}
        <PopularSearches />
      </div>
    </div>
  );
};

export default Search;
