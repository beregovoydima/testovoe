import { UserData } from '@/core/interfaces';
import { ApiResponse } from '@/core/interfaces/common';

import { ApiRepositoryContract } from '@/infrastructure/httpLayer/apiRepository/contracts';
import { UserApiServiceContract } from '@/infrastructure/httpLayer/apiServices/contracts';

export class UserApiService implements UserApiServiceContract {
  constructor(private readonly apiRepository: ApiRepositoryContract) {}

  public async getUsers(): Promise<ApiResponse<UserData[]>> {
    return this.apiRepository.get('users');
  }
  public async getUserInfo(id: number): Promise<ApiResponse<UserData>> {
    return this.apiRepository.get(`users/${id}`);
  }
  public async createUser(userData: any): Promise<ApiResponse<any>> {
    return this.apiRepository.post(`users`, userData);
  }
}
