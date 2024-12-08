import Title from '@/components/common/Title';
import MyBucket from '@/components/myPage/MyBucket';
import MyInfo from '@/components/myPage/MyInfo';

const MyPage = () => {
  return (
    <div className='h-full'>
      <Title />
      <MyInfo />
      <MyBucket />
    </div>
  );
};

export default MyPage;
