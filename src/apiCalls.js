const getReservations = () => {
  fetch('http://localhost:3001/api/v1/reservations')
    .then(data => {
      if (!response.ok) {
        throw Error('Something\'s gone wrong')
      }
      return response.json()
    })
}

export default getReservations