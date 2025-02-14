import { Col, Row, Typography, Card, Table, List } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDataPrivate } from "../../utils/api";

const { Title, Text } = Typography;

const Authors = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const [dataSources, setDataSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = () => {
    setIsLoading(true);
    getDataPrivate("/api/v1/authors/read")
      .then((resp) => {
        setIsLoading(false);
        if (resp?.datas) {
          setDataSources(resp?.datas)
        } else {
          setErrMsg("Failed fetching data (resp kembali)")
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setErrMsg("Failed fetching data (err)")
        console.log(err)
      })
  }

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    }
  ];

  return (
    <div className="layout-content">
      <Row gutter={[24, 0]}>
        <Col xs={22} className="mb-24">
          <Card bordered={false} className="criclebox h-full w-full">
            <Title>Ambil Nilai</Title>
            <Text style={{ fontSize: "12pt" }}>Add content here</Text>
            <Table dataSource={dataSources} columns={columns} rowKey={"book_id"} loading={isLoading} />;
          </Card>

          <List
            grid={{ gutter: 24, xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
            dataSource={dataSources}
            renderItem={(item) => (
              <List.Item>
                <Card hoverable>
                  <Card.Meta
                    title={`${item.first_name} ${item.last_name}`}
                  />
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Authors;




