class UrlService {
  public static baseUrl: string = "http://localhost:8000/api/";
  public static projectList: string = this.baseUrl + "project/list?page=";
  public static projectCreate: string = this.baseUrl + "project/create";
}

export default UrlService;
