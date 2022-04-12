import { Button, Form, Input, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import ProjectService from "../../services/project.service";

const ProjectAddForm: React.FC = () => {
  const router = useRouter();

  const handleOnFinish = async (values: any) => {
    await ProjectService.saveProject(values.name);
    router.push("/project");
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
        <Space direction="horizontal" size="middle">
          <Button type="primary" htmlType="submit" icon=" ">
            Save
          </Button>
          <Link href="/project">
            <Button type="primary" htmlType="submit" danger icon=" ">
              Back
            </Button>
          </Link>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ProjectAddForm;
