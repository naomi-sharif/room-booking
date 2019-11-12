import React from 'react';
import { Button } from './Button';

export const Card = ({ hotelID, hotelName, roomsAvailable, hotelLocation, onBook }) => {
  const onClick = () => {
    onBook(hotelID);
  };

  return (
    <div>
      <h1>{hotelName}</h1>
      <p>{roomsAvailable}</p>
      <p>{hotelLocation}</p>
      {roomsAvailable ? <Button onClick={onClick} /> : <p>Sorry, we have no rooms available!</p>}
    </div>
  )
}
