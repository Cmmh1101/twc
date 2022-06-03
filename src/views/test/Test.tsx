import React from "react";
import TestItem from "./TestItem";

const Test = () => {
  const data = [
    {
      name: "maria",
      age: 22,
      email: "email1@gmail.com",
      isMember: true,
      image: "../images/chevron-double-down.svg",
    },
    {
      name: "maria",
      age: 30,
      email: "email1@gmail.com",
      isMember: false,
      image: "../images/chevron-double-down.svg",
    },
    {
      name: "maria",
      age: 50,
      email: "email1@gmail.com",
      isMember: true,
      image: "../images/chevron-double-down.svg",
    },
    {
      name: "maria",
      age: 24,
      email: "email1@gmail.com",
      isMember: false,
      image: "../images/chevron-double-down.svg",
    },
  ];

  return (
    <div
      className="d-flex align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h1>test component</h1>
      {data.map((item, i) => {
        return (
          <TestItem
            key={i}
            name={item.name}
            age={item.age}
            email={item.email}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default Test;
