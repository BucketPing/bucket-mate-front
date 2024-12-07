import type { Category } from '@/types/common/types';

export const CARD_COLOR: Record<
  Category,
  { bgColor: string; textColor: string; chipColor: string }
> = {
  운동: {
    bgColor: 'bg-[#FFFCE9]',
    textColor: 'text-[#F84343]',
    chipColor: 'bg-[#FFEBEB]',
  },
  여행: {
    bgColor: 'bg-[#E8FFE1]',
    textColor: 'text-[#339316]',
    chipColor: 'bg-[#C1FFAE]',
  },
  학습: {
    bgColor: 'bg-[#DEF1FF]',
    textColor: 'text-[#0A6BAB]',
    chipColor: 'bg-[#AEDFFF]',
  },
  취미: {
    bgColor: 'bg-[#FFFCE9]',
    textColor: 'text-[#FF9800]',
    chipColor: 'bg-[#FF9800]',
  },
  음식: {
    bgColor: 'bg-[#E8FFE1]',
    textColor: 'text-[#4CAF50]',
    chipColor: 'bg-[#4CAF50]',
  },
  문화: {
    bgColor: 'bg-[#DEF1FF]',
    textColor: 'text-[#2196F3]',
    chipColor: 'bg-[#2196F3]',
  },
  봉사: {
    bgColor: 'bg-[#DEF1FF]',
    textColor: 'text-[#2196F3]',
    chipColor: 'bg-[#2196F3]',
  },
  기타: {
    bgColor: 'bg-[#DEF1FF]',
    textColor: 'text-[#2196F3]',
    chipColor: 'bg-[#2196F3]',
  },
};

export const CATEGORY_EMOJI: Record<Category, string> = {
  운동: '💪',
  여행: '🚗',
  학습: '📚',
  취미: '🎮',
  음식: '🍴',
  문화: '🎨',
  봉사: '🤝',
  기타: '🌐',
};
