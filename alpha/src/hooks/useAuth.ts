import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

export const ax = axios.create();

function useAuth(): string {
    const { data: userData, error } = useSWRImmutable('key', getUserId);
    return ''
}

export const getUserId = async (): Promise<IUser> => {
    const res = await ax.get('user/v1');
    return res?.data?.data;
  };
  
  export interface IUser {
    id?: string;
    name: string;
    email: string;
  }

export default useAuth;
