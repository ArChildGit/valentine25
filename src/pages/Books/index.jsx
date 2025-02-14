import { Col, Row, Typography, Card, Table } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDataPrivate } from "../../utils/api";

const { Title, Text } = Typography;

// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre',
  },
  {
    title: 'Publication Year',
    dataIndex: 'publication_year',
    key: 'publication_year',
  },
];

const BooksBaru = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const [dataSources, setDataSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    setIsLoading(true);
    getDataPrivate("/api/v1/books/read")
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

  return (
    <div className="layout-content">
      <Row gutter={[24, 0]}>
        <Col xs={22} className="mb-24">
          <Card bordered={false} className="criclebox h-full w-full">
            <Title>GETDATA BOOKS TERBARU </Title>
            <Text style={{ fontSize: "12pt" }}>Add content here</Text>
            <Table dataSource={dataSources} columns={columns} rowKey={"book_id"} loading={isLoading} />;
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BooksBaru;
