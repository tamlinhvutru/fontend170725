import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Cập nhật đường dẫn
import Container from '../components/layout/Container';
import Form from '../components/form/Form';
import LoadingSpinner from '../components/common/LoadingSpinner';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const mockToken = 'mock-token-123';
      if (username && password) {
        login(mockToken);
        navigate('/my-devices');
      } else {
        setError('Vui lòng nhập tên đăng nhập và mật khẩu.');
      }
      setLoading(false);
    }, 1000);
  };

  const fields = [
    { label: 'Tên đăng nhập', type: 'text', value: username, onChange: (e) => setUsername(e.target.value), placeholder: 'Nhập tên đăng nhập' },
    { label: 'Mật khẩu', type: 'password', value: password, onChange: (e) => setPassword(e.target.value), placeholder: 'Nhập mật khẩu' },
  ];

  return (
    <Container>
      {loading && <LoadingSpinner />}
      <Form
        title="Đăng nhập"
        fields={fields}
        onSubmit={handleLogin}
        error={error}
        buttonText="Đăng nhập"
      />
    </Container>
  );
};

export default LoginPage;