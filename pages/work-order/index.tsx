import { Button, Col, Empty, Row, Space } from "antd";
import Link from "next/link";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import WorkOrderTable from "../../components/tables/work-order.table";
import Template from "../../components/template";
import UrlService from "../../services/url.service";

const WorkOrders = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const url = UrlService.workOrderList + pageIndex;
  const { mutate, fetcher } = useSWRConfig();
  const { data, error } = useSWR<unknown>(url, fetcher, {
    revalidateIfStale: false,
  });

  return (
    <Template pageTitle="Work order list">
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row justify="space-between">
          <Col span="20"></Col>
          <Col span="4" style={{ textAlign: "end" }}>
            <Link href="work-order/add">
              <Button type="primary" htmlType="button" icon=" ">
                Add work order
              </Button>
            </Link>
          </Col>
        </Row>

        <Row justify="center">
          <Col span={24}>
            {error && <div>Error loading data...</div>} {!data && <Empty />}
            {data && (
              <WorkOrderTable
                workOrders={data?.wo}
                onPaginationChange={(page) => {
                  setPageIndex(page);
                  // console.log(UrlService.projectList + page);
                  // mutate(UrlService.projectList + page);
                }}
              />
            )}
          </Col>
        </Row>
      </Space>
    </Template>
  );
};

export default WorkOrders;
