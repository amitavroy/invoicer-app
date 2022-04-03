import { Button, Form, Input } from "antd";
import ProjectService from "../../services/project.service";

const ProjectAddForm: React.FC = () => {
  const handleOnFinish = async (values: any) => {
    await ProjectService.saveProject(values.name);
  };
  const handleOnFinishFailed = (errorInfo: any) => {
    console.log("Error", errorInfo);
  };
  return (
    <Form
      name="projectadd"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      onFinish={handleOnFinish}
      onFinishFailed={handleOnFinishFailed}
    >
      <Form.Item
        label="Project name"
        name="name"
        rules={[{ required: true, message: "Name is required!" }]}
      >
        <Input placeholder="Enter project name" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProjectAddForm;
