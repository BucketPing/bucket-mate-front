import CardList from '@/components/home/card/CardList';
import Header from '@/components/home/list/Header';

const Home = () => {
  return (
    <div className='bg-slate-400 h-full'>
      Home
      <Header>🔥 인기 버킷리스트</Header>
      <CardList />
    </div>
  );
};

export default Home;
