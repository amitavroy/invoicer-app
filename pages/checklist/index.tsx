import { Button, Col, Empty, Row, Space } from "antd";
import Link from "next/link";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import ChecklistTable from "../../components/tables/checklist.table";
import Template from "../../components/template";
import UrlService from "../../services/url.service";

const ChecklistPage = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(UrlService.checklistList + pageIndex);

  return (
    <Template pageTitle="Checklists">
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
            {error && <div>Error loading data...</div>}
            {!data && <Empty />}
            {data && (
              <ChecklistTable
                checklists={data?.checklists}
                onPaginationChange={(page) => {
                  console.log(page);
                  setPageIndex(page);
                }}
              />
            )}
          </Col>
        </Row>
      </Space>
    </Template>
  );
};

export default ChecklistPage;
