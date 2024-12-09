import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import closeIcon from '@/assets/icons/close.svg';
import BucketListForm from '@/components/common/BucketListForm';
import LabelForm from '@/components/common/LabelForm';

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: '여행' },
  { id: 2, name: '운동' },
  { id: 3, name: '모닝루틴' },
  { id: 4, name: '마음챙김' },
  { id: 5, name: '식습관' },
  { id: 6, name: '취미' },
  { id: 7, name: '장소' },
];

const BucketCreate = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((categoryId) => categoryId !== id)
        : [...prev, id],
    );
  };

  return (
    <div className='h-full rounded-t-[20px] shadow-[0px_0px_20px_0px_#00000010] p-5'>
      <header>
        <div className='flex justify-between'>
          <p className='text-base font-bold '>버킷리스트 만들기</p>
          <button onClick={() => navigate(-1)}>
            <img src={closeIcon} alt='닫기' />
          </button>
        </div>
      </header>
      <main>
        <div className=''>
          <LabelForm id='bucket-create' label='버킷 카테고리 선택해 주세요' />
          <div className='flex flex-wrap gap-3 mt-4'>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`px-4 py-3 rounded-full border text-sm ${
                  selectedCategories.includes(category.id)
                    ? 'bg-[#292A2C] text-white font-medium'
                    : 'bg-white text-[#292A2C] border-[##EBEDF1] font-bold'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <BucketListForm selectedCategories={selectedCategories} />
      </main>
    </div>
  );
};

export default BucketCreate;
