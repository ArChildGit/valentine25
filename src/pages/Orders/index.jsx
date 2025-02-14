import { Col, Row, Typography, Card, Table } from "antd";
import { useLocation } from "react-router-dom";

const { Title, Text } = Typography;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Qty',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Total',
    dataIndex: 'address',
    key: 'address',
  },
];

const Orders = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  return (
    <div className="layout-content">
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12} className="mb-24">
          <Card bordered={false} className="criclebox h-full w-full">
            <Title>Annual {lastSegment}</Title>
            <Text style={{ fontSize: "12pt" }}>Data orders in annual</Text>
            <Table dataSource={dataSource} columns={columns} />;
          </Card>
        </Col>
        <Col xs={24} md={12} className="mb-24">
          <Card bordered={false} className="criclebox h-full w-full">
            <Title>Monthly {lastSegment}</Title>
            <Text style={{ fontSize: "12pt" }}>Data Orders in monthly</Text>
            <Table dataSource={dataSource} columns={columns} />;
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Orders;
