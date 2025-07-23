import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // Cập nhật đường dẫn
import Container from '../components/layout/Container';
import Card from '../components/card/card';
import LoadingSpinner from '../components/common/LoadingSpinner';

const MyDevicesPage = () => {
  const [devices, setDevices] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const sampleDevices = [
        { device_id: 1, name: 'Laptop Dell', status: 'assigned', type: 'laptop', serial_number: 'SN123' },
        { device_id: 2, name: 'Monitor LG', status: 'assigned', type: 'monitor', serial_number: 'SN456' },
      ];
      setDevices(sampleDevices);
      setLoading(false);
    }, 1000);
  }, []);

  const handleReturn = (deviceName) => {
    setMessage(`Đã gửi yêu cầu trả ${deviceName}.`);
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
                onReturn={() => handleReturn(device.name)}
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