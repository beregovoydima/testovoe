import { Axios } from 'axios';

export class ApiRepository {
  constructor(private readonly coreApiInstance: Axios) {}

  async get(url: string, config?: Record<string, any>) {
    try {
      const response = await this.coreApiInstance.get(url, config);
      return response;
    } catch (e: any) {
      return e.response;
    }
  }

  async post(url: string, data: any, config?: Record<string, any>) {
    try {
      const response = await this.coreApiInstance.post(url, data, config);
      return response;
    } catch (e: any) {
      return e.response;
    }
  }
}
