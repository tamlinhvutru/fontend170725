import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Cập nhật đường dẫn
import Container from '../components/layout/Container';
import Form from '../components/form/Form';
import Button from '../components/common/Button'; // Thêm import Button

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }
    const mockToken = 'mock-token-123';
    if (username && password) {
      login(mockToken);
      navigate('/devices');
    } else {
      setError('Vui lòng nhập tên đăng nhập và mật khẩu.');
    }
  };

  const fields = [
    { label: 'Tên đăng nhập', type: 'text', value: username, onChange: (e) => setUsername(e.target.value), placeholder: 'Nhập tên đăng nhập' },
    { label: 'Mật khẩu', type: 'password', value: password, onChange: (e) => setPassword(e.target.value), placeholder: 'Nhập mật khẩu' },
    { label: 'Xác nhận mật khẩu', type: 'password', value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), placeholder: 'Nhập lại mật khẩu' },
  ];

  const secondaryButton = (
    <Button onClick={() => navigate('/login')} className="w-full bg-gray-500 hover:bg-gray-600">
      Quay lại
    </Button>
  );

  return (
    <Container>
      <Form
        title="Đăng ký"
        fields={fields}
        onSubmit={handleRegister}
        error={error}
        buttonText="Đăng ký"
        secondaryButton={secondaryButton}
      />
    </Container>
  );
};

export default RegisterPage;