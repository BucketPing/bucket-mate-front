interface HeaderProps {
  children: string;
  onEntireClick?: () => void;
}

const ListHeader = ({ children, onEntireClick }: HeaderProps) => {
  return (
    <div className='flex justify-between text-base'>
      <h1 className='text-[#626262] font-bold'>{children}</h1>
      <button className='text-[#292A2C]' onClick={onEntireClick}>
        전체보기
      </button>
    </div>
  );
};

export default ListHeader;
