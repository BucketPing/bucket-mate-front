import CardItem from './CardItem';

const CardList = () => {
  return (
    <div className='flex mt-3 overflow-x-auto gap-3 whitespace-nowrap [&::-webkit-scrollbar]:hidden'>
      {Array.from({ length: 5 }).map((v, index) => (
        <CardItem key={index} />
      ))}
    </div>
  );
};

export default CardList;
