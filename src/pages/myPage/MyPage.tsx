import MyBucket from '@/components/myPage/MyBucket';
import MyInfo from '@/components/myPage/MyInfo';

const MyPage = () => {
  return (
    <div className='h-full'>
      <MyInfo />
      <MyBucket />
    </div>
  );
};

export default MyPage;
