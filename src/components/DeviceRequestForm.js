import React, { useState } from 'react';
import Button from './common/Button'; 
import LoadingSpinner from './common/LoadingSpinner'; 
import api from '../config/api';


const DeviceRequestForm = ({ deviceId, onClose }) => {
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/requests', { deviceId, reason });
      alert('Yêu cầu mượn đã được gửi.');
      onClose();
    } catch (err) {
      setError('Gửi yêu cầu thất bại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Yêu cầu mượn thiết bị</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Lý do</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Nhập lý do mượn"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button onClick={onClose} className="bg-gray-500">Hủy</Button>
            <Button type="submit" disabled={loading}>
              Gửi {loading && <LoadingSpinner />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeviceRequestForm;