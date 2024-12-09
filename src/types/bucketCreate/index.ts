export interface CreateBucketReqBody {
  userId: number;
  category: string;
  title: string;
  description: string;
  maxCapacity: number;
  startDate: string;
  endDate: string;
}
