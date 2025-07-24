import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Container from '../components/layout/Container';
import Card from '../components/card/Cardc';
import LoadingSpinner from '../components/common/LoadingSpinner';
import api from '../config/api';

const MyDevicesPage = () => {
  const [devices, setDevices] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevices = async () => {
      const response = await api.get('/my-devices');
      setDevices(response.data);
      setLoading(false);
    };
    fetchDevices();
  }, []);

  const handleReturn = async (deviceId) => {
    try {
      await api.post('/returns', { deviceId });
      setMessage('Đã gửi yêu cầu trả thành công.');
      setDevices(devices.filter(d => d.device_id !== deviceId));
    } catch (err) {
      setMessage('Gửi yêu cầu thất bại.');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-4">Thiết bị của tôi</h2>
      {message && <p className="text-green-500 mb-4 text-center">{message}</p>}
      {loading ? <LoadingSpinner /> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.length === 0 ? (
            <p>Chưa có thiết bị nào.</p>
          ) : (
            devices.map((device) => (
              <Card
                key={device.device_id}
                title={device.name}
                status={device.status}
                onRequest={() => {}}
                onReturn={() => handleReturn(device.device_id)}
              >
                <p className="text-sm text-gray-500">Loại: {device.type}</p>
                <p className="text-sm text-gray-500">Số serial: {device.serial_number}</p>
              </Card>
            ))
          )}
        </div>
      )}
    </Container>
  );
};

export default MyDevicesPage;