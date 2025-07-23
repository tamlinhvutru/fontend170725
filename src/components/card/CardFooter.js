import React from 'react';
import Button from '../common/Button';

const CardFooter = ({ status, onRequest, onReturn }) => (
  <>
    {status === 'available' && (
      <Button onClick={onRequest} className="mt-2 w-full">Yêu cầu mượn</Button>
    )}
    {status === 'assigned' && (
      <Button onClick={onReturn} className="mt-2 w-full bg-red-500 hover:bg-red-600">Trả thiết bị</Button>
    )}
  </>
);

export default CardFooter;