import React from 'react';

export const Header = ({roomsAvailable}) => {
  return (
    <>
      <h1>Welcome to Sleep Tight Hotel room booking App</h1>
      <p>We have {roomsAvailable} rooms to book</p>
    </>
  )
}

