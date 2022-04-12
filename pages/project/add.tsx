import { useEffect } from "react";
import ProjectAddForm from "../../components/forms/project-add.form";
import Template from "../../components/template";

const ProjectAdd = () => {
  useEffect(() => {}, []);
  return (
    <Template pageTitle="Add new Project">
      <ProjectAddForm />
    </Template>
  );
};

export default ProjectAdd;
