import AxiosMockAdapter from 'axios-mock-adapter';
import axios from '@/api/config';
import mockBucketList from '../../../public/mockBucketList.json';
import mockMyBucketDetail from '../../../public/mockMyBucketDetail.json';
import type { BucketHotListResponse } from '@/types/home';
import type { Bucket, User } from '@/types/common/types';
import { mockUserData } from '@/constants/bucketDetail/mockData';

const mock = new AxiosMockAdapter(axios.host);

mock.onGet('/api/bucket-list').reply(200, mockBucketList);
mock.onGet('/api/bucket-list/11').reply(200, mockMyBucketDetail);
mock.onGet('/api/user-list').reply(200, mockUserData);

export const getBucketHotList = async (): Promise<BucketHotListResponse> => {
  try {
    const response = await axios.host.get('/api/bucket-list');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBucketDetail = async (bucketId: number): Promise<Bucket> => {
  try {
    const response = await axios.host.get(`/api/bucket-list/${bucketId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async (): Promise<User[]> => {
  try {
    const response = await axios.host.get(`/api/user-list`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
