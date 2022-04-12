export interface WorkOrder {
  id: number;
  gid: string;
  code: string;
  project_id: number;
  title: string;
  description: string;
  hours: number;
  is_complete: boolean;
  created_at: Date;
  updated_at: Date;
}
