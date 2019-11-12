import React, { useState } from 'react';
import { Header } from './Header';
import { Card } from './Card';
import './App.css';
import hotels from './hotels.json';
import hotelAvailability from './hotelAvailability.json';

export const App = () => {

  const hotelData = hotels.map((hotel) => {
    const foundHotel = hotelAvailability.find((hotelAvailability) => {
      return hotel.HotelID === hotelAvailability.HotelID;
    });
    hotel.RoomsBooked = foundHotel.RoomsBooked;

    hotel.RoomsAvailable = hotel.HotelNumRooms - foundHotel.RoomsBooked;
    return hotel;
  });

  const totalRoomsAvailable = hotelData.reduce((total, hotel) => {
    return total + hotel.RoomsAvailable;
  }, 0)

  const [hotelDataState, setHotelDataState] = useState(hotelData);
  const [totalRoomsAvailableState, setTotalRoomsAvailableState] = useState(totalRoomsAvailable);

  const onBook = (HotelID) => {
    const hotelIndex = hotelDataState.findIndex(hotel => hotel.HotelID === HotelID);
    const newHotelDataState = JSON.parse(JSON.stringify(hotelDataState));
    newHotelDataState[hotelIndex].RoomsBooked += 1;
    newHotelDataState[hotelIndex].RoomsAvailable -= 1;
    setHotelDataState(newHotelDataState);
    setTotalRoomsAvailableState(totalRoomsAvailableState - 1);
    alert('Thank you for booking!');
  };

  return (
    <>
      <Header roomsAvailable={totalRoomsAvailableState} />
      {hotelDataState.map((hotel, index) => {
        return <Card key={index} hotelID={hotel.HotelID} hotelName={hotel.HotelName} hotelLocation={hotel.HotelLocation} roomsAvailable={hotel.RoomsAvailable} onBook={onBook} />
      })}
    </>
  );
}


// Move most stuff out of App and have in a seperate template file - as a seperate JSX file.
// App.js should be kept as small as possible - so just have app render a main component.
// Don't need to store rooms avaialbel in memory, have total number of rooms, have total number of rooms booked.
