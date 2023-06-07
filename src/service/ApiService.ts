import { injectable } from "inversify";
import InventoryItem from "../types/InventoryItem";
import mockData from "./mockData.json";

export interface ApiResponseType {
  /**
   * Data returned in the response.
   */
  data: Array<InventoryItem>;
  /**
   * The responses status code (if applicable).
   */
  status: number;
}

export interface ApiServiceType {
  get: () => Promise<ApiResponseType>;
}

@injectable()
export default class ApiService implements ApiServiceType {
  private static instance: ApiService;
  
  static get initialized(): ApiService {
    if (!ApiService.instance) {
      this.instance = new ApiService();
    }
    return this.instance;
  }

  public get = async (): Promise<ApiResponseType> => {
    return mockData;
  }
}
