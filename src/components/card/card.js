import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = ({ title, status, onRequest, onReturn, children }) => (
  <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition">
    <CardHeader title={title} />
    <CardBody status={status}>{children}</CardBody>
    <CardFooter status={status} onRequest={onRequest} onReturn={onReturn} />
  </div>
);

export default Card;