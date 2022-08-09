import { ApiResponse } from '@/core/interfaces';

export interface ApiRepositoryContract {
  get(url: string, config?: Record<string, any>): Promise<ApiResponse<any>>;

  post(
    url: string,
    data: Record<string, any> | null,
    config?: Record<string, any>
  ): Promise<ApiResponse<any>>;
}
