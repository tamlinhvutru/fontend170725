import React from 'react';
import FilterSelect from './FilterSelect';

const Filter = ({ onTypeChange, onStatusChange }) => (
  <div className="mb-4 flex space-x-4">
    <FilterSelect onChange={onTypeChange} options={[
      { value: '', label: 'Tất cả loại' },
      { value: 'laptop', label: 'Laptop' },
      { value: 'phone', label: 'Điện thoại' },
      { value: 'monitor', label: 'Màn hình' },
    ]} />
    <FilterSelect onChange={onStatusChange} options={[
      { value: '', label: 'Tất cả trạng thái' },
      { value: 'available', label: 'Có sẵn' },
      { value: 'assigned', label: 'Đang mượn' },
      { value: 'maintenance', label: 'Bảo trì' },
    ]} />
  </div>
);

export default Filter;