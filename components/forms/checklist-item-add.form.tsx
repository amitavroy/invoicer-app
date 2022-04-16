import { Button, Checkbox, Form, Input, Space } from "antd";
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ChecklistService from "../../services/checklist.service";

interface Props {
  checklistId: string | string[];
}

const ChecklistItemAddForm: React.FC<Props> = ({ checklistId }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [isMandatory, setIsMandatory] = useState<boolean>(true);
  const [fileRequired, setFileRequired] = useState<boolean>(false);

  const handleOnFinish = async (values: any) => {
    values["is_mandatory"] = isMandatory;
    values["file_required"] = fileRequired;
    const resp = await ChecklistService.saveChecklistItem(values);
    if (resp?.status === 201) {
      form.resetFields();
      router.push(`/checklist/${checklistId}`);
    }
  };
  const handleOnFinishFailed = (errorInfo: any) => {
    console.log("Error", errorInfo);
  };

  return (
    <>
      <Title level={2}>Add new Checklist item</Title>
      <Form
        form={form}
        name="checklistitemadd"
        labelAlign="left"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        onFinish={handleOnFinish}
        onFinishFailed={handleOnFinishFailed}
        initialValues={{
          checklist_id: checklistId,
        }}
      >
        <Form.Item
          label="Checklist item"
          name="item"
          rules={[{ required: true, message: "Title is required!" }]}
        >
          <Input placeholder="Enter title" />
        </Form.Item>

        <p style={{ marginBottom: "20px" }}>
          <Checkbox
            checked={isMandatory}
            onChange={(e) => setIsMandatory(!isMandatory)}
          >
            Is this mandatory?
          </Checkbox>
        </p>

        <p style={{ marginBottom: "20px" }}>
          <Checkbox
            checked={fileRequired}
            onChange={(e) => setFileRequired(!fileRequired)}
          >
            File required?
          </Checkbox>
        </p>

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

        <Form.Item label="" name="checklist_id">
          <Input
            placeholder="Enter title"
            type={"hidden"}
            value={checklistId}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default ChecklistItemAddForm;
