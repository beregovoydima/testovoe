import { UserServiceContract } from '@/core/contracts/';
import { UserApiServiceContract } from '@/infrastructure/httpLayer/apiServices/contracts';
import { UserData } from '@/core/interfaces';
import { ApiResponse } from '@/core/interfaces';
import { ElNotification } from 'element-plus';

export class UserService implements UserServiceContract {
  constructor(private readonly userApiService: UserApiServiceContract) {}

  public async getUsers(): Promise<ApiResponse<UserData[]>> {
    const response = await this.userApiService.getUsers();

    if (response.status !== 200) {
      ElNotification({
        type: 'warning',
        title: 'Что-то пошло не так',
        message: 'Мы уже работаем над ошибкой',
      });
    }
    return response;
  }
  public async getUserInfo(id: number): Promise<ApiResponse<UserData>> {
    const response = await this.userApiService.getUserInfo(id);

    if (response.status !== 200) {
      ElNotification({
        type: 'warning',
        title: 'Что-то пошло не так',
        message: 'Мы уже работаем над ошибкой',
      });
    }
    return response;
  }
  public async createUser(userData: any): Promise<ApiResponse<any>> {
    const response = await this.userApiService.createUser(userData);

    if (response.status === 201) {
      ElNotification({
        type: 'success',
        title: 'Успешно',
        message: 'Пользователь успешно создан',
      });
    } else {
      ElNotification({
        type: 'warning',
        title: 'Что-то пошло не так',
        message: 'Мы уже работаем над ошибкой',
      });
    }
    return response;
  }
}
