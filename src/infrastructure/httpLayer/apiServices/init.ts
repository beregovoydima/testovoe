import { UserApiServiceContract } from '@/infrastructure/httpLayer/apiServices/contracts';
import { UserApiService } from '@/infrastructure/httpLayer/apiServices/userApiService';
import { apiRepository } from '@/infrastructure/httpLayer/apiRepository';

let userApiServiceInstance: UserApiServiceContract;

function getUserApiService(): UserApiServiceContract {
  if (!userApiServiceInstance) {
    userApiServiceInstance = new UserApiService(apiRepository);
  }
  return userApiServiceInstance;
}

export const userApiService: UserApiServiceContract = getUserApiService();

