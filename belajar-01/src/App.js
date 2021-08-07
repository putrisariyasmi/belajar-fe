import React, {useState} from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function App(props){
  const [listBelanja, setListBelanja] = useState([
    {
      name: "Sampoo Botol Besar",
      qty: 1,
      store: "Sardo Swalayan",
      price: "Rp25.000"
    },
    {
      name: "Indomie Goreng",
      qty: 20,
      store: "Giant",
      price: "Rp5.000"
    },
    {
      name: "Coca-Cola",
      qty: 2,
      store: "Giant",
      price: "Rp15.000"
    },
    {
      name: "Sabun Mandi",
      qty: 4,
      store: "Sardo Swalayan",
      price: "Rp35.000"
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
              {" pcs"} {" | "}
              {obj?.store}
              {" | "}
              {obj?.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}