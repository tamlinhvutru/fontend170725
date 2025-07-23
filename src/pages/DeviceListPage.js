import React, { useState, useEffect } from 'react';
import Container from '../components/layout/Container';
import Card from '../components/card/card';
import Filter from '../components/filter/Filter';

const DeviceListPage = () => {
  const [devices, setDevices] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const sampleDevices = [
      { device_id: 1, name: 'Laptop Dell', status: 'available', type: 'laptop', serial_number: 'SN123' },
      { device_id: 2, name: 'Monitor LG', status: 'assigned', type: 'monitor', serial_number: 'SN456' },
    ];
    setDevices(sampleDevices);
  }, []);

  const filteredDevices = devices.filter(
    (device) =>
      (!typeFilter || device.type === typeFilter) &&
      (!statusFilter || device.status === statusFilter)
  );

  const handleRequest = (deviceName) => {
    alert(`Yêu cầu mượn thiết bị: ${deviceName}`);
  };

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-4">Danh sách thiết bị</h2>
      <Filter onTypeChange={(e) => setTypeFilter(e.target.value)} onStatusChange={(e) => setStatusFilter(e.target.value)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDevices.map((device) => (
          <Card
            key={device.device_id}
            title={device.name}
            status={device.status}
            onRequest={() => handleRequest(device.name)}
            onReturn={() => {}}
          >
            <p className="text-sm text-gray-500">Loại: {device.type}</p>
            <p className="text-sm text-gray-500">Số serial: {device.serial_number}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default DeviceListPage;