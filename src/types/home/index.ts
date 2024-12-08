import type { Bucket } from '../common/types';

export interface BannerProps {
  onClick: () => void;
}

export interface BucketHotListResponse {
  buckets: Bucket[];
  totalCount: number;
}
