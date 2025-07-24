import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Container from '../components/layout/Container';
import Form from '../components/form/Form';
import LoadingSpinner from '../components/common/LoadingSpinner';
import api from '../config/api';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { username, password });
      const { token } = response.data;
      login(token);
      navigate('/my-devices');
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra thông tin.');
    } finally {
      setLoading(false);
    }
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