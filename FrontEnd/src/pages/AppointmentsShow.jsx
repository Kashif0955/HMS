import React from 'react';

const AppointmentsShow = ({ appointments }) => {
  return (
    <div className="appointments-container">
      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments found.</p>
      ) : (
        <ul className="appointments-list">
          {appointments.map((appointment) => (
            <li key={appointment._id} className="appointment-item">
              <h3 className="appointment-title">
                Appointment with Dr. {appointment.doctor.firstName} {appointment.doctor.lastName}
              </h3>
              <div className="appointment-details">
                <strong>Patient:</strong> {appointment.firstName} {appointment.lastName}<br />
                <strong>Email:</strong> {appointment.email}<br />
                <strong>Phone:</strong> {appointment.phone}<br />
                <strong>Date:</strong> {new Date(appointment.appointment_date).toLocaleDateString()}<br />
                <strong>Department:</strong> {appointment.department}<br />
                <strong>Status:</strong> {appointment.status}<br />
                <strong>Address:</strong> {appointment.address}<br />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentsShow;
