import { PageData } from "./base/page-data.interface";

export interface WorkOrderData extends PageData {
  data: Array<WorkOrderData>;
}
