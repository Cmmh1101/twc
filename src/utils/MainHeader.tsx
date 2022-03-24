import React from "react";
import { Col } from "reactstrap";

interface Props {
  headerText: string;
  customClass?: string;
  subText?: string;
  subTitleDeco?: string;
}

const MainHeader = ({
  headerText,
  customClass,
  subText,
  subTitleDeco,
}: Props) => {
  return (
    <Col className={`main-header mx-auto py-5 ${customClass}`}>
      <h2 className={customClass}>{headerText}</h2>
      <hr className="solid" />
    </Col>
  );
};

export default MainHeader;
