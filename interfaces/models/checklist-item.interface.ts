export interface ChecklistItem {
  id: number;
  checklist_id: number;
  item: string;
  is_mandatory: boolean;
  file_required: boolean;
  created_at: Date;
  updated_at: Date;
}
