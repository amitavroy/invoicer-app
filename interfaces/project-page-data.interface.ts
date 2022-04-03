import { PageData } from "./base/page-data.interface";
import { Project } from "./models/project.interface";

export interface ProjectPageData extends PageData {
  data: Array<Project>;
}
