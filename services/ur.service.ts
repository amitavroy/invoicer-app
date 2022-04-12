class UrlService {
  public static baseUrl: string = "http://localhost:8000/api/";
  public static projectList: string = this.baseUrl + "project/list?page=";
  public static projectCreate: string = this.baseUrl + "project/create";

  public static workOrderList: string = this.baseUrl + "wo/list?page=";
}

export default UrlService;
