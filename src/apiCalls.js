const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if (!response.ok) {
        throw Error('Something\'s gone wrong')
      }
      return response.json()
    })
}

const postReservation = (reservation, onSuccess) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation),
    })
    .then(response => {
      if (!response.ok) {
        throw Error('Something\'s gone wrong')
      }
      return response.json()
    })
    .then(() => onSuccess)
    .catch(error => console.log(error))
}


export default getReservations