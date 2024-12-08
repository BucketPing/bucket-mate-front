import AxiosMockAdapter from 'axios-mock-adapter';
import axios from '@/api/config';
import mockBucketList from '../../../public/mockBucketList.json';
import type { BucketHotListResponse } from '@/types/home';

const mock = new AxiosMockAdapter(axios.host);

mock.onGet('/api/bucket-list').reply(200, mockBucketList);

export const getBucketHotList = async (): Promise<BucketHotListResponse> => {
  try {
    const response = await axios.host.get('/api/bucket-list');
    return response.data;
  } catch (error) {
    throw error;
  }
};
