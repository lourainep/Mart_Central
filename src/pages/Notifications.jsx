import React, { useState } from 'react';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestsCount, setGuestsCount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your logic to send reservation data to the server goes here
    try {
      const reservationData = {
        date,
        time,
        guestName,
        guestsCount,
      };
      // Send reservationData to the server using fetch or Axios
      // Example: await fetch('/api/reservation', {
      //            method: 'POST',
      //            body: JSON.stringify(reservationData),
      //            headers: {
      //              'Content-Type': 'application/json'
      //            }
      //          });
      console.log('Reservation data sent:', reservationData);
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="date" className="block mb-1 font-semibold">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block mb-1 font-semibold">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="guestName" className="block mb-1 font-semibold">Guest Name:</label>
        <input
          type="text"
          id="guestName"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="guestsCount" className="block mb-1 font-semibold">Number of Guests:</label>
        <input
          type="number"
          id="guestsCount"
          value={guestsCount}
          onChange={(e) => setGuestsCount(e.target.value)}
          className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Make Reservation
      </button>
    </form>
  );
};

export default ReservationForm;
