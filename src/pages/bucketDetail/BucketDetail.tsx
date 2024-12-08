import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import Thumbnail from '@/components/common/Thumbnail';
import Header from '@/components/bucketDetail/Header';
import Title from '@/components/bucketDetail/Title';
import BucketOwner from '@/components/bucketDetail/BucketOwner';
import JoinMember from '@/components/bucketDetail/JoinMember';
import Category from '@/components/bucketDetail/Category';
import Description from '@/components/bucketDetail/Description';
import Duration from '@/components/bucketDetail/Duration';
import JoinBtn from '@/components/bucketDetail/JoinBtn';
import { useGetUserDetail } from '@/hooks/bucketDetail/useGetUserDetail';
import { useGetBucketDetail } from '@/hooks/bucketDetail/useGetBucketDetail';
import type { Bucket, User } from '@/types/common/types';

const BucketDetail = () => {
  // const { id: bucketId } = useParams();

  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isExpandBtnClicked, setIsExpandBtnClicked] = useState(false);

  const { data: bucketData, isFetching: bucketFetching } =
    useGetBucketDetail(11);
  const { data: userData, isFetching: userDataFetching } = useGetUserDetail(1);
  console.log(bucketData);

  return (
    <section className='m-5'>
      <Header />
      <Thumbnail />

      {!bucketFetching && !userDataFetching && (
        <div>
          <Title
            bucketData={bucketData as Bucket}
            isHeartClicked={isHeartClicked}
            setIsHeartClicked={setIsHeartClicked}
          />

          <main className='mb-5'>
            <BucketOwner userData={userData as User} />
            <JoinMember
              bucketData={bucketData as Bucket}
              isExpandBtnClicked={isExpandBtnClicked}
              setIsExpandBtnClicked={setIsExpandBtnClicked}
            />
            <Category bucketData={bucketData as Bucket} />
            <Description />
            <Duration />
            <JoinBtn />
          </main>
        </div>
      )}
    </section>
  );
};

export default BucketDetail;
