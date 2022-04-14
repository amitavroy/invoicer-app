import { AxiosResponse } from "axios";
import HttpService from "./http.service";
import UrlService from "./url.service";

class ProjectService {
  public static async saveProject(name: string): Promise<AxiosResponse> {
    return await HttpService.post(UrlService.projectCreate, {
      name,
    });
  }
}

export default ProjectService;
