import React from 'react';
import FormTitle from './FormTitle';
import FormSection from './FormSection';
import Button from '../common/Button';
import ErrorMessage from '../common/ErrorMessage';

const Form = ({ title, fields, onSubmit, error, buttonText, secondaryButton = null }) => (
  <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
    <FormTitle title={title} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
    <FormSection fields={fields} />
    <Button type="submit" className="w-full mb-2">{buttonText}</Button>
    {secondaryButton && secondaryButton}
  </form>
);

export default Form;