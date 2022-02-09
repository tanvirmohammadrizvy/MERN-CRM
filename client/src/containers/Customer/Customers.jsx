import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await axios.get('/customers');
      setCustomers(res.data);
    };
    fetchCustomers();
  }, [])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Mobile</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          customers.map((item) => (
            <tr key={item}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.mobile}</td>
            <td>{item.email}</td>
          </tr>
          ))
        }
      </tbody>
    </Table>
  );
}
