import { Button, Col, Row, Space } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectTable from "../../components/tables/project.table";
import Template from "../../components/template";
import { ProjectPageData } from "../../interfaces/project-page-data.interface";
import ProjectService from "../../services/project.service";

const Project = () => {
  const [projects, setProjects] = useState<ProjectPageData>();

  const getProjects = async (page) => {
    const resp = await ProjectService.getProjects(page);
    setProjects(resp.data.projects);
  };

  useEffect(() => {
    getProjects(1);
  }, []);

  return (
    <Template pageTitle="Project list">
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row justify="space-between">
          <Col span="20"></Col>
          <Col span="4" style={{ textAlign: "end" }}>
            <Link href="project/add">
              <Button type="default" htmlType="button" icon=" ">
                Add project
              </Button>
            </Link>
          </Col>
        </Row>
        <Row justify="center">
          <Col span="24">
            {projects && (
              <ProjectTable projects={projects} getProjects={getProjects} />
            )}
          </Col>
        </Row>
      </Space>
    </Template>
  );
};

export default Project;
