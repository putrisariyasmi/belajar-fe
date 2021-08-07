import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

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
  return (
    <div style={{ margin: "24px" }}>
      <Card>
        <Card.Header>Daftar Belanja</Card.Header>
        <ListGroup variant="flush">
          {listBelanja?.map((obj, index) => (
            <ListGroup.Item>
              {index + 1}
              {". "}
              {obj?.name}
              {" | "}
              {obj?.qty}
              {" pcs"}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}
