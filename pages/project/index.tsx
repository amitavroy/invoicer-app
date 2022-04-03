import { Pagination } from "antd";
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
    <Template>
      <div>
        {projects && (
          <ProjectTable projects={projects} getProjects={getProjects} />
        )}
      </div>
    </Template>
  );
};

export default Project;
