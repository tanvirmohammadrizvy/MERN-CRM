import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Customer Lists</h5>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
