import axios from "axios";
import HttpService from "./http.service";
import UrlService from "./ur.service";

class ProjectService {
  public static async getProjects(page: number) {
    return await axios.get(UrlService.projectList + page);
  }

  public static async saveProject(name: string) {
    const resp = await HttpService.post(UrlService.projectCreate, {
      name,
    });
  }
}

export default ProjectService;
