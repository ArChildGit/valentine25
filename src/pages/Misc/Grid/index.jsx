import { useLocation } from "react-router-dom";
import { Col, Row, Typography, Card, Table, Layout, Menu, Input, Space, Grid, Divider, Button } from "antd";
import { AudioOutlined, BorderOuterOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import StatCard from "../../../components/misc/StatCard";

// -- Search Bar utils --
const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1677ff',
//     }}
//   />
// );
const onSearch = (value, _e, info) => console.log(info?.source, value);

//Misc Layout & Typografi
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
const { Header, Sider, Content, Footer } = Layout;

const Dashboard = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const screens = useBreakpoint();

  // Defaukt 24 system
  // gutter={16} → Adds spacing between columns.
  // span={12} → Takes half (12/24) of the width.

  return (
    <div className="layout-content">
      <Row gutter={16}>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
      </Row>

      {/* {Margin row} */}
      <Text>
        UTILIZE MARGIN
      </Text >
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
        <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
      </Row>

      {/* {Utilize spacer} */}
      <Row>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <Text>
            UTILIZE ANTD SPACE
          </Text >
          <Row gutter={16}>
            <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
            <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
            <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
            <Col span={12}><div style={{ background: '#f0f2f5', padding: 20 }}>50%</div></Col>
          </Row>
        </Space>
      </Row>

      {/* Divider */}
      <Row>
        <Text>
          DIVIDER AND CARD
        </Text >
      </Row>
      <Row>
        <Divider orientation="left">Actions</Divider>
        <Space size="large">
          <Button type="primary">Save</Button>
          <Button>Cancel</Button>
        </Space>
      </Row>
      <Row>
        <Space size="large">
          <Card title="User Info" bordered={false} style={{ width: 300 }}>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
          </Card>
          <Card title="User Info" bordered={false} style={{ width: 300 }}>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
          </Card>
          <Card title="User Info" bordered={false} style={{ width: 300 }}>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
          </Card>
          <Card title="User Info" bordered={false} style={{ width: 300 }}>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
          </Card>
          <Card title="User Info" bordered={false} style={{ width: 300 }}>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
          </Card>
        </Space>
      </Row>

    </div>
  );
};

export default Dashboard;

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
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
