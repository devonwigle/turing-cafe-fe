import React, { Component } from 'react';
import './App.css';
import Reservation from '../Components/Reservation'
import getReservations from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({reservations: data}))
      .catch(error => console.log(error.message))
  }

  showReservations = () => {
    return this.state.reservations.map(reservation => {
      return (
        <Reservation 
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
        />
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.showReservations()}
        </div>
      </div>
    )
  }
}

export default App;
