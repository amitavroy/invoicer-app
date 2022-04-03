import { Col, Row } from "antd";
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
      <Row justify="center">
        <Col span="8">
          {projects && (
            <ProjectTable projects={projects} getProjects={getProjects} />
          )}
        </Col>
      </Row>
    </Template>
  );
};

export default Project;
