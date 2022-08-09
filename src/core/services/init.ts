import { UserServiceContract } from '@/core/contracts';
import { UserService } from '@/core/services/userService';
import { userApiService } from '@/infrastructure/httpLayer/apiServices';


let userServiceInstance: UserServiceContract;

function getUserService(): UserServiceContract {
  if (!userServiceInstance) {
    userServiceInstance = new UserService(userApiService);
  }
  return userServiceInstance;
}

export const userService: UserServiceContract = getUserService();
