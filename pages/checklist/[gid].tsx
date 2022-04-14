import { Col, Descriptions, List, PageHeader, Row, Space } from "antd";
import { Content } from "antd/lib/layout/layout";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { FC } from "react";

import Template from "../../components/template";
import { Checklist } from "../../interfaces/models/checklist.interface";
import HttpService from "../../services/http.service";
import UrlService from "../../services/url.service";

interface Props {
  checklist: Checklist;
}

const ChecklistDetails: React.FC<Props> = ({ checklist }) => {
  const router = useRouter();
  return (
    <Template pageTitle="Checklist details">
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => router.push("/checklist")}
          title={`${checklist.title}`}
        >
          <Space direction="vertical" size="large">
            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Title">
                {checklist.title}
              </Descriptions.Item>
              <Content>{checklist.description}</Content>
            </Descriptions>
          </Space>
        </PageHeader>
      </div>
      <Content style={{ marginTop: "20px" }}>
        <Row>
          <Col span={12}>Left</Col>
          <Col span={12}>
            <List
              bordered
              dataSource={checklist.items}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.item}
                    description={`Mandatory: ${
                      item.is_mandatory ? "Yes" : "No"
                    }`}
                  />
                </List.Item>
              )}
            ></List>
          </Col>
        </Row>
      </Content>
    </Template>
  );
};

export default ChecklistDetails;

export async function getServerSideProps(context) {
  const resp: AxiosResponse<{ checklist: Checklist; success: boolean }> =
    await HttpService.get(UrlService.checklistDetails + context.params.gid);
  return {
    props: { checklist: resp.data.checklist }, // will be passed to the page component as props
  };
}
