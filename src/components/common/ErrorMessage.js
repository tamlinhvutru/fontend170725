import React from 'react';

const ErrorMessage = ({ children }) => (
  <p className="text-red-500 mb-4 text-center">{children}</p>
);

export default ErrorMessage;