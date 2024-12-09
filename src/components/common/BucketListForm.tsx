import { useState } from 'react';
import ParticipantSlider from './ParticipantSlider';
import TextAreaForm from './TextAreaForm';
import LabelForm from './LabelForm';
import DateRangeSelector from './DateRangeSelector';
import Duration from '../bucketDetail/Duration';
import type { CreateBucketReqBody } from '@/types/bucketCreate';
import { createBucket } from '@/api/home';
import { useNavigate } from 'react-router-dom';

interface BucketListFormProps {
  selectedCategories: number[];
}

const BucketListForm = ({ selectedCategories }: BucketListFormProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const maxTitleLength = 30;
  const maxDescriptionLength = 500;

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedTitle = e.target.value.slice(0, maxTitleLength);
    setTitle(updatedTitle);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const updatedDescription = e.target.value.slice(0, maxDescriptionLength);
    setDescription(updatedDescription);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // 코드 추후 리팩토링 필요~!
    // const reqBody: CreateBucketReqBody = {
    //   userId: 1,
    //   category: '운동',
    //   title: '주말 아침 조깅 모임',
    //   description:
    //     '한강공원에서 함께 조깅하며 건강한 주말 아침을 시작해요. 초보자부터 마라톤 준비생까지 누구나 환영합니다!',
    //   maxCapacity: 6,
    //   startDate: '2024-12-14',
    //   endDate: '2024-12-29',
    // };

    navigate('/bucket-register');
    // return await createBucket(reqBody).then((res) => {
    //   // console.log(res);
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelForm id='title' label='버킷 이름을 정해주세요' />
      <TextAreaForm
        rows={1}
        maxLength={30}
        id='title'
        value={title}
        placeholder='예) 버킷핑과 운동여행하기'
        onChange={handleTitleChange}
      />
      <span className='text-sm text-[#A4A7AF] flex justify-end pt-2'>{`${title.length} / ${maxTitleLength}`}</span>

      <LabelForm id='description' label='버킷 내용을 알려주세요' />
      <TextAreaForm
        rows={2}
        maxLength={500}
        id='description'
        value={description}
        onChange={handleDescriptionChange}
        placeholder='예) 여행과 운동을 사랑하는 사람으로 매일 열심히 여행해요!'
      />
      <span className='text-sm text-[#A4A7AF] flex justify-end pt-2'>{`${description.length} / ${maxDescriptionLength}`}</span>

      <div className='flex items-end justify-between'>
        <LabelForm id='maxCapacity' label='최대 몇명까지 참여할까요?' />
        <div className='py-1 px-2 border rounded-full text-sm text-[#A4A7AF] bg-[#FAFAFA] text-center mb-2'>
          최대<span className='text-[#292A2C] font-bold'> 6명</span>
        </div>
      </div>

      <ParticipantSlider />

      <LabelForm id='date' label='기간을 정해주세요' />
      <DateRangeSelector />
      <div className='border-t'>
        <Duration />
      </div>

      <button
        onClick={handleSubmit}
        className='w-full bg-[rgba(0,115,255,1)] text-[16px] text-center font-medium text-white py-3 rounded-xl mt-2'
      >
        버킷리스트 만들기
      </button>
    </form>
  );
};

export default BucketListForm;
