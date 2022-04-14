import { Button, Form, Input, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import ChecklistService from "../../services/checklist.service";

const ChecklistAddForm = () => {
  const router = useRouter();

  const handleOnFinish = async (values: any) => {
    const resp = await ChecklistService.saveProject(values);
    resp.status === 201 && router.push("/checklist");
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
        label="Checklist title"
        name="title"
        rules={[{ required: true, message: "Title is required!" }]}
      >
        <Input placeholder="Enter checklist title" />
      </Form.Item>

      <Form.Item
        label="Checklist description"
        name="description"
        rules={[{ required: true, message: "Description is required!" }]}
      >
        <Input.TextArea placeholder="Enter checklist details" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Space direction="horizontal" size="middle">
          <Button type="primary" htmlType="submit" icon=" ">
            Save
          </Button>
          <Link href="/checklist">
            <Button type="primary" htmlType="submit" danger icon=" ">
              Back
            </Button>
          </Link>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ChecklistAddForm;
