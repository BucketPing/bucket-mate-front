import type { Bucket, User, BucketParticipantTemp } from '@/types/common/types';
import mockProfileOneSrc from '@/assets/icons/profile-1.svg';
import mockProfileTwoSrc from '@/assets/icons/profile-2.svg';
import mockProfileThreeSrc from '@/assets/icons/profile-3.svg';
import mockProfileFourSrc from '@/assets/icons/profile-4.svg';
import mockProfileFiveSrc from '@/assets/icons/profile-5.svg';
import mockProfileSixSrc from '@/assets/icons/profile-6.svg';

export const dummyProfileSrc: BucketParticipantTemp[] = [
  { userId: 1, nickname: '행복한 고라니', profile: mockProfileOneSrc },
  { userId: 2, nickname: '유능한 백수', profile: mockProfileTwoSrc },
  { userId: 3, nickname: '쫄깃한 칼국수', profile: mockProfileThreeSrc },
  { userId: 4, nickname: '귀여운 버킷핑', profile: mockProfileFourSrc },
  { userId: 5, nickname: '우디고 차일드', profile: mockProfileFiveSrc },
  { userId: 6, nickname: '깐깐한 대머리', profile: mockProfileSixSrc },
];

export const mockBucketData: Bucket = {
  bucketId: 1,
  ownerId: 1, // 아래 mockUserData의 id와 연결
  categories: ['운동', '학습', '여행'],
  title: '세계여행하면서 운동하기',
  description:
    '안녕하세요!<br/>저는 여행과 운동을 사랑하는 사람으로, 두 가지를 동시에 즐길 수 있는 특별한 경험을 하고 싶어 이 글을 올리게 되었어요. 세계 곳곳을 누비며 아름다운 풍경 속에서 러닝, 요가, 등산, 서핑 등 다양한 활동을 함께할 동료를 찾고 있습니다.<br /><br/>목표는 각 나라의 매력을 느끼면서 건강한 라이프스타일을 유지하는 거예요. 혼자서는 힘들었던 운동도 함께라면 더 즐겁고 지속 가능할 거라 믿어요!<br /><br/>긍정적인 마인드와 도전 정신만 있다면 누구든 환영입니다. 🗺️✈️ 우리만의 특별한 추억을 만들어 봐요! 관심 있으신 분은 댓글이나 DM 주세요!😊',
  participant: [
    {
      id: 1,
      bucketId: 1,
      participantId: 1,
    },
    {
      id: 2,
      bucketId: 2,
      participantId: 2,
    },
    {
      id: 3,
      bucketId: 3,
      participantId: 3,
    },
    {
      id: 4,
      bucketId: 4,
      participantId: 4,
    },
    {
      id: 5,
      bucketId: 5,
      participantId: 5,
    },
    {
      id: 6,
      bucketId: 6,
      participantId: 6,
    },
  ],
  maxCapacity: 8,
  progressStatus: 1, //0: 모집중, 1: 진행중, 2: 완료
  startDate: '2024-12-12',
  endDate: '2025-06-12',
  createdAt: '2024-12-03T17:54:53Z',
};

export const mockUserData: User = {
  userId: 1,
  nickname: '행복한 고라니',
  profile: mockProfileOneSrc,
  email: 'test@naver.com',
  bookmarkList: [1], // Bucket의 id를 요소로 한 배열
  createdAt: '2024-12-02T11:33:53Z',
};

export const mockMyPageBucketList: Bucket[] = [
  {
    bucketId: 1,
    ownerId: 1,
    categories: ['운동'],
    title: '아침운동 부수기!',
    description: '아침운동 부수기!',
    participant: [
      {
        id: 1,
        bucketId: 1,
        participantId: 1,
      },
      {
        id: 2,
        bucketId: 2,
        participantId: 2,
      },
      {
        id: 3,
        bucketId: 3,
        participantId: 3,
      },
      {
        id: 4,
        bucketId: 4,
        participantId: 4,
      },
    ],
    maxCapacity: 10,
    progressStatus: 1,
    startDate: '2024.10.01',
    endDate: '2025.6.02',
    createdAt: '2024.11.07',
  },
  {
    bucketId: 2,
    ownerId: 2,
    categories: ['여행'],
    title: '부모님이랑 여행가서 맛집가고 쇼핑하고 야식먹고 잠자기!',
    description: '아침운동 부수기!',
    participant: [
      {
        id: 1,
        bucketId: 1,
        participantId: 1,
      },
      {
        id: 2,
        bucketId: 2,
        participantId: 2,
      },
      {
        id: 3,
        bucketId: 3,
        participantId: 3,
      },
      {
        id: 4,
        bucketId: 4,
        participantId: 4,
      },
    ],
    maxCapacity: 10,
    progressStatus: 1,
    startDate: '2024.10.01',
    endDate: '2025.6.02',
    createdAt: '2024.11.07',
  },
  {
    bucketId: 3,
    ownerId: 3,
    categories: ['학습'],
    title: '맛집 탐방하기!',
    description: '아침운동 부수기!',
    participant: [
      {
        id: 1,
        bucketId: 1,
        participantId: 1,
      },
      {
        id: 2,
        bucketId: 2,
        participantId: 2,
      },
      {
        id: 3,
        bucketId: 3,
        participantId: 3,
      },
      {
        id: 4,
        bucketId: 4,
        participantId: 4,
      },
    ],
    maxCapacity: 10,
    progressStatus: 1,
    startDate: '2024.10.01',
    endDate: '2025.6.02',
    createdAt: '2024.11.07',
  },
  {
    bucketId: 4,
    ownerId: 4,
    categories: ['학습'],
    title: '맛집 탐방하기!',
    description: '아침운동 부수기!',
    participant: [
      {
        id: 1,
        bucketId: 1,
        participantId: 1,
      },
      {
        id: 2,
        bucketId: 2,
        participantId: 2,
      },
      {
        id: 3,
        bucketId: 3,
        participantId: 3,
      },
      {
        id: 4,
        bucketId: 4,
        participantId: 4,
      },
    ],
    maxCapacity: 10,
    progressStatus: 1,
    startDate: '2024.10.01',
    endDate: '2025.6.02',
    createdAt: '2024.11.07',
  },
];
