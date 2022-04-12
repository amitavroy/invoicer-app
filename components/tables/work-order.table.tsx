import { Pagination, Space, Table } from "antd";
import React from "react";
import { WorkOrderData } from "../../interfaces/work-order-data.interface";

interface Props {
  workOrders: WorkOrderData;
  onPaginationChange: (page: number) => void;
}

const WorkOrderTable: React.FC<Props> = ({
  workOrders,
  onPaginationChange,
}) => {
  const columns = [
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "Project", dataIndex: ["project", "name"], key: "name" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Hours", dataIndex: "hours", key: "hours" },
  ];
  return (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>
      <Table
        rowKey={"gid"}
        columns={columns}
        dataSource={workOrders.data}
        pagination={false}
        bordered={true}
      />
      <Pagination
        current={workOrders.current_page}
        pageSize={workOrders.per_page}
        total={workOrders.total}
        onChange={(page, pageSize) => onPaginationChange(page)}
      />
    </Space>
  );
};

export default WorkOrderTable;
