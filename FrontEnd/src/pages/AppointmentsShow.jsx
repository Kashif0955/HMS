// src/components/AppointmentsShow.jsx

import React from 'react';

const AppointmentsShow = ({ appointments }) => {
  return (
    <div>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              <strong>Doctor:</strong> {appointment.doctor.firstName} {appointment.doctor.lastName}<br />
              <strong>Patient:</strong> {appointment.firstName} {appointment.lastName}<br />
              <strong>Email:</strong> {appointment.email}<br />
              <strong>Phone:</strong> {appointment.phone}<br />
              <strong>Date:</strong> {new Date(appointment.appointment_date).toLocaleDateString()}<br />
              <strong>Department:</strong> {appointment.department}<br />
              <strong>Status:</strong> {appointment.status}<br />
              <strong>Address:</strong> {appointment.address}<br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentsShow;
