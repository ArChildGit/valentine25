import { useLocation } from "react-router-dom";
import { Col, Row, Typography, Card, Table, Layout, Menu, Input, Space, Grid, Divider, Button } from "antd";
import { AudioOutlined, BorderOuterOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import StatCard from "../../../components/misc/StatCard";
import "./index.css";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import AskingForLove from "../../../assets/images/misc/valentine2025/animations/askingForLove.json";
import HappyValentine from "../../../assets/images/misc/valentine2025/animations/valentine.json";

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

// -- Cards utils --
const { Meta } = Card;

//Misc Layout & Typografi
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
const { Header, Sider, Content, Footer } = Layout;

const WillYouBeMyValentine = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const screens = useBreakpoint();

  const [isYes, setIsYes] = useState(false);

  const handleYes = () => {
    setIsYes(true); // Update state to switch animation
  };

  return (
    <div
      className="layout-content"
      style={{
        backgroundImage: "url('src/assets/images/misc/valentine2025/background-valentine.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <Row gutter={16} style={{ minHeight: "100vh", padding: 20 }}>
        <Col span={24}>
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 700,
              background: "rgba(255,255,255,0)",
              border: "none",
              boxShadow: "none",
            }}
          >

            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255,255,255,0)",
                border: "none",
                boxShadow: "none",
              }}
            >
              <Lottie animationData={isYes ? HappyValentine : AskingForLove} loop={true} style={{ width: 200, height: 200 }} />
            </Card>
            {!isYes && (
              <>
                <Title className="valentine-title">Will you be my Valentine?</Title>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                  <Button onClick={handleYes} className="valentine-button no"></Button>
                  <Button onClick={handleYes} className="valentine-button" style={{ marginLeft: "40px" }}>
                    💕 Yes 💕
                  </Button>
                </div>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WillYouBeMyValentine