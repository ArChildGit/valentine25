import { Col, Row, Typography, Card, List, Skeleton, Input, Divider, FloatButton, Drawer, Form, Button, notification, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, SearchOutlined, PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { getData, sendData, deleteData } from "../../utils/api";

const { Title, Text } = Typography;

const dataDummy = [
  { id: 1, title: "lorem", description: "lorem ipsum" },
  { id: 2, title: "Dolor", description: "Sir amet" },
  { id: 3, title: "Jean", description: "Need go to campus" },
  { id: 4, title: "John", description: "Need go to cafe" },
  { id: 5, title: "Spark", description: "The lightning from natures" },
];

const Gallery = () => {
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setLoading] = useState(false); // Perbaiki inisialisasi loading state
  const [dataList, setDataList] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [isDrawer, setIsDrawer] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [idSelected, setIdSelected] = useState(null);

  useEffect(() => {
    getDataGallery();
    getDataDummy();
  }, []);

  const showAlert = (status, title, description) => {
    api[status]({
      message: title,
      description: description,
    });
  };

  const getDataDummy = () => {
    // proses ambil data
    setDataList(dataDummy);
  }

  const handleDrawer = () => {
    setIsDrawer(true);
    console.log("handle drawer here");
  }

  const onCloseDrawer = () => {
    if (isEdit) {
      form.resetFields();
      setIsEdit(false);
      setIdSelected(null);
    }
    setIsDrawer(false);
  }

  const getDataGallery = () => {
    setLoading(true); // Set loading to true when fetching starts
    let url = "/api/natures";
    getData(url)
      .then((resp) => {
        if (resp) {
          setData(resp);
        }
        setLoading(false); // Set loading to false after successful fetch
      })
      .catch((err) => {
        setLoading(false); // Set loading to false if there's an error
        console.log(err);
      });
  };

  const handleSearch = (value) => {
    console.log(value);
    setSearchText(value.toLowerCase());
  };

  const handleSubmit = () => {
    let nameNatures = form.getFieldValue("name_natures")
    let description = form.getFieldValue("description")

    // let url = "/api/natures";
    let formData = new FormData()
    formData.append("name_natures", nameNatures)
    formData.append("description", description)

    let url = isEdit ? `/api/natures/${idSelected}` : "/api/natures";
    let request = sendData(url, formData);

    request
      .then(resp => {
        if (resp?.datas) {
          showAlert('success', 'Data saved', 'Success to send data')
          form.resetFields();
          getDataGallery();
          onCloseDrawer();
        } else {
          showAlert('error', 'Failed', 'Send data failed')
        }
      }).catch((err) => {
        showAlert('error', 'Failed', 'Something went wrong')
      })

    showAlert('success', nameNatures, description)

    };

    const renderDrawer = () => {
      return (
        <Drawer title="Basic Drawer"
          onClose={onCloseDrawer}
          open={isDrawer}
          extra={<Button type="primary"
            onClick={handleSubmit}>Submit</Button>}>
          <Form layout="vertical" form={form}>
            <Form.Item name="name_natures" label="Name Natures">
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={3} />
            </Form.Item>
          </Form>
        </Drawer>
      );
    };

    let dataSourceFiltered = dataList.filter((item) => {
      return (
        item?.title.toLowerCase().includes(searchText) ||
        item?.description.toLowerCase().includes(searchText)
      );
    });

    let dataNaturesFiltered = data.filter((item) => {
      return (
        item?.name_natures.toLowerCase().includes(searchText) ||
        item?.description.toLowerCase().includes(searchText)
      );
    });

    const handleDrawerEdit = (record) => {
      setIsDrawer(true);
      setIsEdit(true);
      setIdSelected(record?.id);
      form.setFieldValue("name_natures", record?.name_natures)
      form.setFieldValue("description", record?.description)
    }

    const confirmDelete = (record_id) => {
      let url = `/api/natures/${record_id}`;
      let params = new URLSearchParams();
      params.append("id", record_id)
      deleteData(url, params)
        .then((resp) => {
          if (resp?.status == 200) {
            showAlert("success", "Data deleted", "Data berhasil terhapus");
            getDataGallery();
            form.resetFields();
            onCloseDrawer();
          } else {
            showAlert("error", "Failed", "Data gagal terhapus");
          }
        })
        .catch((err) => {
          console.log(err);
          showAlert("error", "Failed", "Data gagal terhapus");
        })
    }

    return (
      <div className="layout-content">
        {contextHolder}
        <Row gutter={[24, 0]}>
          <Col xs={24} lg={24} className="mb-24">
            <Card bordered={false} className="criclebox h-full w-full">
              <FloatButton
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => handleDrawer()}
                tooltip="Add Gallery"
              />

              {renderDrawer()}

              <Title>Nature of Gallery</Title>
              <Text style={{ fontSize: "12pt" }}></Text>
              <Input
                placeholder="Search here...."
                prefix={<SearchOutlined />}
                className="header-search"
                allowClear
                size={"large"}
                onChange={(e) => handleSearch(e.target.value)}
              />

              <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={dataSourceFiltered}
                renderItem={(item) => (
                  <List.Item>
                    <Text>{item?.title}</Text>
                    <p>{item?.description}</p>
                  </List.Item>
                )}
              />

              <Divider />
              <Input
                placeholder="Search here...."
                prefix={<SearchOutlined />}
                className="header-search"
                allowClear
                size={"large"}
                onChange={(e) => handleSearch(e.target.value)}
              />

              {isLoading ? ( // Show Skeleton when loading
                <Skeleton active />
              ) : data.length > 0 ? ( // Show List if data is available
                <List
                  grid={{ gutter: 24, xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
                  dataSource={dataNaturesFiltered}
                  renderItem={(item) => (
                    <List.Item>
                      <Card
                        hoverable
                        cover={<img alt="example" src={item?.url_photo} />}
                        actions={[
                          <EditOutlined key={item?.id} onClick={() => handleDrawerEdit(item)} />,

                          <Popconfirm
                            key={item?.id}
                            title="Delete the task"
                            description={`Are you sure to delete ${item?.name_natures} ?`}
                            onConfirm={() => confirmDelete(item?.id)}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <DeleteOutlined key={item?.id} />,
                          </Popconfirm>,
                        ]}
                      >
                        <Card.Meta
                          title={item?.name_natures}
                          description={item?.description}
                        />
                      </Card>
                    </List.Item>
                  )}
                />
              ) : (
                "No data" // Show message if no data is available
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  
};

export default Gallery;