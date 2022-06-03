import React from "react";
import { Card, CardBody } from "reactstrap";

interface Props {
  name: string;
  age: number;
  isMember?: boolean;
  email: string;
  image: string;
}

const Test = ({ name, age, email, image }: Props) => {
  return (
    <div
      className="d-flex align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Card>
        <CardBody>
          <img src={image} />
          <h2>{name}</h2>
          <p>{age}</p>
          <span>{email}</span>
        </CardBody>
      </Card>
    </div>
  );
};

export default Test;
