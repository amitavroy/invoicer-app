import { PageData } from "./base/page-data.interface";
import { Checklist } from "./models/checklist.interface";

export interface ChecklistPageData extends PageData {
  data: Array<Checklist>;
}
