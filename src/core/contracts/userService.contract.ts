import { UserData } from '@/core/interfaces';
import { ApiResponse } from '../interfaces/common';

export interface UserServiceContract {
  getUsers(): Promise<ApiResponse<UserData[]>>;
  getUserInfo(id: number): Promise<ApiResponse<UserData>>;
  createUser(userData: any): Promise<ApiResponse<any>>;
}
