class UrlService {
  public static baseUrl: string = "http://localhost:8000/api/";
  public static projectList: string = this.baseUrl + "project/list?page=";
  public static projectCreate: string = this.baseUrl + "project/create";
  public static projectListActive: string = this.baseUrl + "project/active";

  public static workOrderList: string = this.baseUrl + "wo/list?page=";
  public static workOrderCreate: string = this.baseUrl + "wo/create";
  public static workOrderDetails: string = this.baseUrl + "wo/view/";

  public static checklistList: string = this.baseUrl + "checklist/list?page=";
}

export default UrlService;
