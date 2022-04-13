import { Pagination, Space, Table } from "antd";
import { ChecklistPageData } from "../../interfaces/checklist-data.interface";

interface Props {
  checklists: ChecklistPageData;
  onPaginationChange: (page: number) => void;
}

const ChecklistTable = ({ checklists, onPaginationChange }) => {
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];
  return (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>
      <Table
        rowKey={"gid"}
        columns={columns}
        dataSource={checklists.data}
        pagination={false}
        bordered={true}
      />
      <Pagination
        current={checklists.current_page}
        pageSize={checklists.per_page}
        total={checklists.total}
        onChange={(page, pageSize) => onPaginationChange(page)}
      />
    </Space>
  );
};

export default ChecklistTable;
