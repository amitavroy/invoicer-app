import { ChecklistItem } from "./checklist-item.interface";

export interface Checklist {
  gid: string;
  title: string;
  description: string;
  is_active: boolean;
  items: Array<ChecklistItem>;
  created_at: Date;
  updated_at: Date;
}
