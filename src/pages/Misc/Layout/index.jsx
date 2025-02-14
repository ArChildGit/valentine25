import { useLocation } from "react-router-dom";
import { Col, Row, Typography, Card, Table, Layout, Menu, Input, Space, Grid } from "antd";
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

const LatihanLayout = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const screens = useBreakpoint();

  return (
    <div className="layout-content">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>Profile</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>My Dashboard</Header>
          <Content style={{ margin: '16px', padding: 24, background: '#fff' }}>Content Goes Here</Content>
          <Footer style={{ textAlign: 'center' }}>© 2025 My App</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LatihanLayout;

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
