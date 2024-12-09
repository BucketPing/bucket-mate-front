import type { Bucket } from '@/types/common/types';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';

interface CardListProps {
  bucketList: Bucket[];
}

const CardList = ({ bucketList }: CardListProps) => {
  const navigate = useNavigate();
  const goToDetail = (id: number) => {
    navigate(`/bucket/${id}`);
  };

  // 드래그 시작 위치 저장
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const mouseDownHandler = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - (e.currentTarget as HTMLElement).offsetLeft;
    scrollLeft = (e.currentTarget as HTMLElement).scrollLeft;
  };

  const mouseLeaveHandler = () => {
    isDown = false;
  };

  const mouseUpHandler = () => {
    isDown = false;
  };

  const mouseMoveHandler = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (e.currentTarget as HTMLElement).offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    (e.currentTarget as HTMLElement).scrollLeft = scrollLeft - walk;
  };
  return (
    <div
      className='flex overflow-x-auto gap-3 whitespace-nowrap [&::-webkit-scrollbar]:hidden'
      onMouseDown={mouseDownHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
    >
      {bucketList?.map((bucket, index) => (
        <CardItem
          key={index}
          bucket={bucket}
          onClick={() => goToDetail(bucket.bucketId)}
        />
      ))}
    </div>
  );
};

export default CardList;
