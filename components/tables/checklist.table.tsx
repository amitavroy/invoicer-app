import { Pagination, Space, Table } from "antd";
import { useRouter } from "next/router";
import React from "react";

import { ChecklistPageData } from "../../interfaces/checklist-data.interface";

interface Props {
  checklists: ChecklistPageData;
  onPaginationChange: (page: number) => void;
}

const ChecklistTable: React.FC<Props> = ({
  checklists,
  onPaginationChange,
}) => {
  const router = useRouter();
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
        onRow={(row, index) => {
          return {
            onClick: (event) => router.push(`/checklist/${row.gid}`),
          };
        }}
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
