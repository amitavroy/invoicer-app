import HttpService from "./http.service";
import UrlService from "./url.service";

class ProjectService {
  public static async saveProject(name: string) {
    const resp = await HttpService.post(UrlService.projectCreate, {
      name,
    });
  }
}

export default ProjectService;
