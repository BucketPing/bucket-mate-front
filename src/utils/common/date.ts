import { differenceInDays } from 'date-fns';

/**
 * 종료까지 며칠 남았는지 계산하는 함수
 * @param endDt 버킷 종료일
 * @param today 오늘 날짜
 * @returns 종료까지 며칠 남았는지
 */
export const calculateDaysLeft = (endDt: Date, today: Date): number => {
  return differenceInDays(endDt, today);
};

/**
 * 진행률을 계산하는 함수
 * @param endDt 버킷 종료일
 * @param startDt 버킷 시작일
 * @param today 오늘 날짜
 * @returns 진행률
 */
export const calculateProgress = (
  endDt: Date,
  startDt: Date,
  today: Date,
): number => {
  const totalDuration = differenceInDays(endDt, startDt);
  const elapsedDuration = differenceInDays(today, startDt);
  const progress = Math.round((elapsedDuration / totalDuration) * 100);
  return progress;
};
