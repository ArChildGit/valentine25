import { Col, Row, Card, Typography } from "antd";
import { HomeOutlined, AudioOutlined } from "@ant-design/icons";

const { Text } = Typography;

const StatCard = ({ icon, value, text }) => {
  return (
    <Card>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col span={24} style={{ textAlign: "center", fontSize: "24px" }}>
          <Card>
            {icon}
          </Card>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Text strong style={{ fontSize: "20px" }}>
            {value}
          </Text>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Text type="secondary">{text}</Text>
        </Col>
      </Row>
    </Card>
  );
};

export default StatCard;
