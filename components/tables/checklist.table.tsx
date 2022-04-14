import { Pagination, Space, Table } from "antd";
import Link from "next/link";
import React from "react";
import { ChecklistPageData } from "../../interfaces/checklist-data.interface";
import { Checklist } from "../../interfaces/models/checklist.interface";
interface Props {
  checklists: ChecklistPageData;
  onPaginationChange: (page: number) => void;
}

const ChecklistTable: React.FC<Props> = ({
  checklists,
  onPaginationChange,
}) => {
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: any, record: Checklist) => (
        <Link href={`checklist/` + record.gid}>
          <a>View</a>
        </Link>
      ),
    },
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
