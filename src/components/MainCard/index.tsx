import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

import {
  Row,
  Col,
  Card
} from "antd";

interface MainCard {
  title: string,
  extraSpan?: string,
  extraRoute?: string
}

const MainCard: React.FC<MainCard> = ({
  title,
  extraSpan,
  extraRoute,
  children
}) => {

  return (

    <Row
      align="middle"
      justify="center"
      className="card-row"
    >
      <Col
        xs={24}
        className="h-100"
      >

        <Card
          title={title}
          // className="h-100"
          extra={extraSpan && <Link to={extraRoute ? extraRoute : ""}>{extraSpan}</Link>}
        >
          {children}
        </Card>

      </Col>
    </Row>

  )

}

export default MainCard;
