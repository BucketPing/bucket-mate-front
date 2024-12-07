import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Thumbnail from '@/components/bucketDetail/Thumbnail';
import Header from '@/components/bucketDetail/Header';
import Title from '@/components/bucketDetail/Title';
import BucketOwner from '@/components/bucketDetail/BucketOwner';
import JoinMember from '@/components/bucketDetail/JoinMember';
import Category from '@/components/bucketDetail/Category';
import Description from '@/components/bucketDetail/Description';
import Duration from '@/components/bucketDetail/duration';
import JoinBtn from '@/components/bucketDetail/JoinBtn';

const BucketDetail = () => {
  // TODO: 추후 API 호출 시 사용
  const { id: bucketId } = useParams();

  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isExpandBtnClicked, setIsExpandBtnClicked] = useState(false);

  return (
    <section className='m-5'>
      <Header />
      <Thumbnail />

      <div>
        <Title
          isHeartClicked={isHeartClicked}
          setIsHeartClicked={setIsHeartClicked}
        />

        <main className='mb-5'>
          <BucketOwner />
          <JoinMember
            isExpandBtnClicked={isExpandBtnClicked}
            setIsExpandBtnClicked={setIsExpandBtnClicked}
          />
          <Category />
          <Description />
          <Duration />
          <JoinBtn />
        </main>
      </div>
    </section>
  );
};

export default BucketDetail;
