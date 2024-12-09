import type { Bucket, Category } from '../common/types';

export interface SearchBucketList {
  results: Bucket[];
  total: number;
  searchTerm: string;
  matchedCategories: Category[];
}

export interface SearchResultsProps {
  bucketList: Bucket[];
}

export interface ResultItemProps {
  bucket: Bucket;
}
