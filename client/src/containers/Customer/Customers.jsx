import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await axios.get('/customers');
      setCustomers(res.data);
    };
    fetchCustomers();
  }, []);

  return (
    <Table customers={customers} />
  );
}
