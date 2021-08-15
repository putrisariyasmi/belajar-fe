import React, { useState } from "react";
import {
  Card,
  ListGroup,
  Row,
  Col,
  Button,
  Modal,
  Form,
  InputGroup,
} from "react-bootstrap";

const initTambah = {
  name: "",
  qty: 1,
};
export default function App(props) {
  const [listBelanja, setListBelanja] = useState([
    {
      name: "Sampoo Botol Besar",
      qty: 1,
    },
    {
      name: "Indomie Goreng",
      qty: 20,
    },
    {
      name: "Coca-Cola",
      qty: 2,
    },
    {
      name: "Sabun Mandi",
      qty: 4,
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [tambahData, setTambahData] = useState(initTambah);

  return (
    <>
      {/* Main Section */}
      <div style={{ margin: "24px" }}>
        <Card>
          <Card.Header>
            <Row>
              <Col lg="9" md="9" sm="12">
                <h3>Daftar Belanja</h3>
              </Col>
              <Col lg="3" md="3" sm="12">
                <div className="d-grid gap-2">
                  <Button
                    onClick={() => {
                      setTambahData(initTambah);
                      setShowModal(true);
                    }}
                  >
                    Tambah
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Header>
          <ListGroup variant="flush">
            {listBelanja?.map((obj, index) => (
              <ListGroup.Item>
                <Row>
                  <Col lg="10" md="10" sm="8">
                    <p>
                      {index + 1}
                      {". "}
                      {obj?.name}
                      {" | "}
                      {obj?.qty}
                      {" pcs"}
                    </p>
                  </Col>
                  <Col lg="2" md="2" sm="4">
                    <Button
                      style={{ float: "right" }}
                      variant="danger"
                      onClick={() => {
                        let tempDelete = listBelanja;
                        tempDelete.splice(index, 1);
                        setListBelanja([...tempDelete]);
                      }}
                    >
                      Hapus
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>

      {/* //Modal Section */}

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Belanjaan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan Nama Barang..."
              value={tambahData?.name}
              onChange={(event) => {
                setTambahData({
                  ...tambahData,
                  name: event.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Jumlah Barang</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                placeholder="Masukan Jumlah Barang..."
                value={tambahData?.qty}
                onChange={(event) => {
                  setTambahData({
                    ...tambahData,
                    qty: parseInt(event.target.value),
                  });
                }}
              />
              <InputGroup.Text>Pcs</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Batal
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              let tempData = listBelanja;
              tempData.push(tambahData);
              setListBelanja(tempData);
              setShowModal(false);
            }}
          >
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
