import AxiosMockAdapter from 'axios-mock-adapter';
import axios from '@/api/config';
import mockBucketList from '../../../public/mockBucketList.json';
import mockMyBucketDetail from '../../../public/mockMyBucketDetail.json';
import mockUserDetail from '../../../public/mockUserDetail.json';
import type { BucketHotListResponse } from '@/types/home';
import type { Bucket, User } from '@/types/common/types';

const mock = new AxiosMockAdapter(axios.host);

mock.onGet('/api/bucket-list').reply(200, mockBucketList);
mock.onGet('/api/bucket-list/11').reply(200, mockMyBucketDetail);
mock.onGet('/api/user-list').reply(200, mockMyBucketDetail);
mock.onGet('/api/user/1').reply(200, mockUserDetail);

export const getBucketHotList = async (): Promise<BucketHotListResponse> => {
  try {
    const response = await axios.host.get('/api/bucket-list');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBucketDetail = async (bucketId: string): Promise<Bucket> => {
  try {
    const response = await axios.host.get(`/api/bucket-list/${bucketId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserList = async (): Promise<User[]> => {
  try {
    const response = await axios.host.get('/api/user-list');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetail = async (userId: number): Promise<User> => {
  try {
    const response = await axios.host.get(`/api/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
