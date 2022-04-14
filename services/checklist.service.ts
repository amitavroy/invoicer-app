import { AxiosResponse } from "axios";
import HttpService from "./http.service";
import UrlService from "./url.service";

interface ChecklistPayload {
  title: string;
  description: string;
}

class ChecklistService {
  public static async saveProject(
    data: ChecklistPayload
  ): Promise<AxiosResponse> {
    return await HttpService.post(UrlService.checklistCreate, data);
  }
}

export default ChecklistService;
