// src/pages/DoctorDashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentsShow from './AppointmentsShow'; // Adjust the import path as necessary

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('doctorToken');
        const { data } = await axios.get("http://localhost:4000/api/v1/appointment/doctorAppointments", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setAppointments(data.appointments); // Adjust if backend response structure is different
      } catch (err) {
        setError('Error fetching appointments');
        console.error('Error fetching appointments:', err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      {error && <p>{error}</p>}
      <AppointmentsShow appointments={appointments} />
    </div>
  );
};

export default DoctorDashboard;
