import chevronLeft from '@/assets/icons/chevron-left.svg';
import Input from '@/components/common/Input';
import NoSearchResult from '@/components/search/NoSearchResult';
import { Link } from 'react-router-dom';

const Search = () => {
  const search = () => {
    console.log('1');
  };

  return (
    <div className='h-full'>
      <div className='h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010] p-5'>
        <div className='flex items-center'>
          <Link to='/'>
            <img src={chevronLeft} className='bg-red hover:fill-slate-400' />
          </Link>
          <Input
            placeholder='같이 버킷리스트 찾아볼까요?'
            onChange={() => {}}
            onSearch={search}
            value=''
          />
        </div>
        <NoSearchResult />
      </div>
    </div>
  );
};

export default Search;
