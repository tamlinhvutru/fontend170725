import React, { useState, useEffect } from 'react';
import Container from '../components/layout/Container';
import Card from '../components/card/Cardc';
import Filter from '../components/filter/Filter';
import DeviceRequestForm from '../components/form/DeviceRequestForm';
import api from '../config/api';

const DeviceListPage = () => {
  const [devices, setDevices] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  useEffect(() => {
    const fetchDevices = async () => {
      const response = await api.get('/devices');
      setDevices(response.data);
    };
    fetchDevices();
  }, []);

  const filteredDevices = devices.filter(
    (device) =>
      (!typeFilter || device.type === typeFilter) &&
      (!statusFilter || device.status === statusFilter)
  );

  const handleRequest = (deviceId) => {
    setSelectedDeviceId(deviceId);
  };

  const handleCloseForm = () => {
    setSelectedDeviceId(null);
  };

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-4">Danh sách thiết bị</h2>
      <Filter onTypeChange={(e) => setTypeFilter(e.target.value)} onStatusChange={(e) => setStatusFilter(e.target.value)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredDevices.map((device) => (
          <Card
            key={device.device_id}
            title={device.name}
            status={device.status}
            onRequest={() => handleRequest(device.device_id)}
            onReturn={() => {}}
          >
            <p className="text-sm text-gray-500">Loại: {device.type}</p>
            <p className="text-sm text-gray-500">Số serial: {device.serial_number}</p>
          </Card>
        ))}
      </div>
      {selectedDeviceId && <DeviceRequestForm deviceId={selectedDeviceId} onClose={handleCloseForm} />}
    </Container>
  );
};

export default DeviceListPage;