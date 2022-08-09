import { UserData } from '@/core/interfaces';
import { ApiResponse } from '@/core/interfaces/common';

export interface UserApiServiceContract {
  getUsers(): Promise<ApiResponse<UserData[]>>;
  getUserInfo(id: number): Promise<ApiResponse<UserData>>;
  createUser(userData: any): Promise<ApiResponse<any>>;
}
