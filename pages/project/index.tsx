import { Button, Col, Empty, Row, Space } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import ProjectTable from "../../components/tables/project.table";
import Template from "../../components/template";
import UrlService from "../../services/url.service";

const Project = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { mutate } = useSWRConfig();
  const url = UrlService.projectList + pageIndex;
  const { data, error } = useSWR(url);

  return (
    <Template pageTitle="Project list">
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row justify="space-between">
          <Col span="20"></Col>
          <Col span="4" style={{ textAlign: "end" }}>
            <Link href="project/add">
              <Button type="primary" htmlType="button" icon=" ">
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
              <ProjectTable
                projects={data?.projects}
                onPaginationChange={(page) => setPageIndex(page)}
              />
            )}
          </Col>
        </Row>
      </Space>
    </Template>
  );
};

export default Project;
