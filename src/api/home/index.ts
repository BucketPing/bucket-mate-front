import AxiosMockAdapter from 'axios-mock-adapter';
import mockBucketList from '../../../public/mockBucketList.json';
import mockMyBucketDetail from '../../../public/mockMyBucketDetail.json';
import mockUserDetail from '../../../public/mockUserDetail.json';
import axios from '@/api/config';
import type { BucketHotListResponse } from '@/types/home';
import type { Bucket, User } from '@/types/common/types';
import type { SearchBucketList } from '@/types/search/search';
import type { CreateBucketReqBody } from '@/types/bucketCreate';

const mock = new AxiosMockAdapter(axios.host);

mock.onGet('/api/bucket-list').reply(200, mockBucketList);
mock.onGet('/api/bucket-list/11').reply(200, mockMyBucketDetail);
mock.onGet('/api/user-list').reply(200, mockMyBucketDetail);
mock.onGet('/api/user/1').reply(200, mockUserDetail);

const instance = axios.host;

export const getBucketHotList = async (): Promise<BucketHotListResponse> => {
  try {
    const response = await instance.get('/api/bucket-list');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBucketDetail = async (bucketId: string): Promise<Bucket> => {
  try {
    const response = await instance.get(`/api/bucket-list/${bucketId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserList = async (): Promise<User[]> => {
  try {
    const response = await instance.get('/api/user-list');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetail = async (userId: number): Promise<User> => {
  try {
    const response = await instance.get(`/api/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchBucketList = async (
  keyword: string,
): Promise<SearchBucketList> => {
  try {
    const response = await instance.get(`/api/search?search=${keyword}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBucket = async (
  reqBody: CreateBucketReqBody,
): Promise<void> => {
  try {
    const response = await instance.post('/api/bucket-list/create', reqBody);
    console.log('버킷생성 post 성공');
    return response.data;
  } catch (error) {
    console.log('버킷생성 post 실패F');
    throw error;
  }
};
