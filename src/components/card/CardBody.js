import React from 'react';

const CardBody = ({ status, children }) => (
  <>
    <p className="text-gray-600">Trạng thái: {status}</p>
    {children}
  </>
);

export default CardBody;