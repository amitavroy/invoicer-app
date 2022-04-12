import HttpService from "./http.service";
import UrlService from "./url.service";

interface WorkOrderPayload {
  code: string;
  project_id: number;
  title: string;
  description: string;
  hours: number;
}

class WorkOrderService {
  public static async saveWorkOrder(data: WorkOrderPayload) {
    return await HttpService.post(UrlService.workOrderCreate, data);
  }
}

export default WorkOrderService;
