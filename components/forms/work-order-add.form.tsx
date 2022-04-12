import { Button, Form, Input, Select, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";

import { Project } from "../../interfaces/models/project.interface";
import UrlService from "../../services/url.service";
import WorkOrderService from "../../services/work-order.service";

interface ActiveProjectList {
  projects: Array<Project>;
  success: boolean;
}

const WorkOrderAddForm = () => {
  const { Option } = Select;
  const router = useRouter();
  const { fetcher } = useSWRConfig();

  const { data, error } = useSWR<any>(UrlService.projectListActive, fetcher, {
    revalidateIfStale: false,
  });
  const handleOnFinish = async (values: any) => {
    const resp = await WorkOrderService.saveWorkOrder(values);
    console.log(resp);
    resp.status === 201 && router.push("/work-order");
    // router.push("/work-order");
  };
  const handleOnFinishFailed = (errorInfo: any) => {
    console.log("Error", errorInfo);
  };
  return (
    <Form
      name="woadd"
      initialValues={{ project_id: "" }}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      onFinish={handleOnFinish}
      onFinishFailed={handleOnFinishFailed}
    >
      <Form.Item
        label="Work order CODE"
        name="code"
        rules={[{ required: true, message: "Work order CODE is required!" }]}
      >
        <Input placeholder="Enter Work order code" />
      </Form.Item>

      {!error && (
        <Form.Item
          label="Project"
          name="project_id"
          rules={[{ required: true, message: "Select project" }]}
        >
          <Select
            showSearch
            filterOption={(
              input: string,
              option: { key: string; value: number; children: string }
            ) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="">Select</Option>
            {data &&
              data.projects.map((project) => (
                <Option value={project.id} key={project.id}>
                  {project.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
      )}

      <Form.Item
        label="Work order title"
        name="title"
        rules={[{ required: true, message: "Title is required!" }]}
      >
        <Input placeholder="Enter Work order title" />
      </Form.Item>

      <Form.Item
        label="Work order description"
        name="description"
        rules={[{ required: true, message: "Description is required!" }]}
      >
        <Input.TextArea placeholder="Enter Work order details" />
      </Form.Item>

      <Form.Item
        label="Work order hours"
        name="hours"
        rules={[{ required: true, message: "Hours is required!" }]}
      >
        <Input placeholder="Enter Work order hours" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Space direction="horizontal" size="middle">
          <Button type="primary" htmlType="submit" icon=" ">
            Save
          </Button>
          <Link href="/work-order">
            <Button type="primary" htmlType="submit" danger icon=" ">
              Back
            </Button>
          </Link>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default WorkOrderAddForm;
