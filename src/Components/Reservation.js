import React from 'react'

const Reservation = ({id, name, date, time, number }) => {
  return (
    <section id={id} key={id}>
      <h3>{name}</h3>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
      <h3>Number in Party: {number}</h3>
    </section>
  )
}

export default Reservation