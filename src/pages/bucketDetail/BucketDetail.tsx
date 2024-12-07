import { useNavigate, useParams } from 'react-router-dom';
import chevronLeft from '@/assets/icons/chevron-left.svg';

const BucketDetail = () => {
  const { id: bucketId } = useParams();
  const navigate = useNavigate();

  return (
    <div className='h-full'>
      <header>
        <button onClick={() => navigate(-1)}>
          <img src={chevronLeft} />
        </button>
      </header>
    </div>
  );
};

export default BucketDetail;
