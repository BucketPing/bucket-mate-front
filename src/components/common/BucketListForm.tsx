import { useState } from 'react';
import ParticipantSlider from './ParticipantSlider';
import TextAreaForm from './TextAreaForm';
import LabelForm from './LabelForm';
import DateRangeSelector from './DateRangeSelector';
import Duration from '../bucketDetail/Duration';

const BucketListForm = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          최대<span className='text-[#292A2C] font-bold'> 3명</span>
        </div>
      </div>

      <ParticipantSlider />

      <LabelForm id='date' label='기간을 정해주세요' />
      <DateRangeSelector />
      <div className='border-t'>
        <Duration />
      </div>
    </form>
  );
};

export default BucketListForm;
