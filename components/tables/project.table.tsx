import { Pagination, Space, Table } from "antd";
import React from "react";
import { Project } from "../../interfaces/models/project.interface";
import { ProjectPageData } from "../../interfaces/project-page-data.interface";

interface Props {
  projects: ProjectPageData;
  getProjects: (page: any) => Promise<void>;
}

const ProjectTable: React.FC<Props> = ({ projects, getProjects }) => {
  const columns = [{ title: "Name", dataIndex: "name", key: "name" }];
  return (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>
      <Table
        rowKey={"gid"}
        columns={columns}
        dataSource={projects.data}
        pagination={false}
        bordered={true}
      />
      <Pagination
        current={projects.current_page}
        pageSize={projects.per_page}
        total={projects.total}
        onChange={(page, pageSize) => getProjects(page)}
      />
    </Space>
  );
};

export default ProjectTable;
