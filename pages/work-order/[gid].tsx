import { Descriptions, PageHeader, Space } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import Template from "../../components/template";
import UrlService from "../../services/url.service";

const WorkOrderDetails = () => {
  const router = useRouter();
  const { query } = router;
  const { fetcher } = useSWRConfig();
  const { data, error } = useSWR(
    UrlService.workOrderDetails + query.gid,
    fetcher,
    {
      revalidateIfStale: false,
    }
  );
  console.log("data", data);
  return (
    <Template pageTitle="Work order details">
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => router.push("/work-order")}
          title={`${data?.wo.project.name} // ${data?.wo.title}`}
          subTitle={`${data?.wo.code}`}
        >
          <Space direction="vertical" size="large">
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Project name">
                {data?.wo.project.name}
              </Descriptions.Item>
              <Descriptions.Item label="Title">
                {data?.wo.title}
              </Descriptions.Item>
              <Descriptions.Item label="Code">
                {data?.wo.code}
              </Descriptions.Item>
              <Descriptions.Item label="Hours">
                {data?.wo.hours}
              </Descriptions.Item>
              <Descriptions.Item label="Completed">
                {data?.wo.is_complete == 1 ? "Yes" : "No"}
              </Descriptions.Item>
              <Descriptions.Item label="Created on">
                {data?.wo.created_at}
              </Descriptions.Item>
            </Descriptions>
            <Content>{data?.wo.description}</Content>
          </Space>
        </PageHeader>
      </div>
    </Template>
  );
};

export default WorkOrderDetails;
