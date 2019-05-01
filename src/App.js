import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import FlightTimes from './FlightTimes';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getAllFlights } from './apiFunctions';


const Container = styled.div`

`;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFlights: ''
    };
    
    this.setFlightTimes = this.setFlightTimes.bind(this);
    this.reloadFlightTimes = this.reloadFlightTimes.bind(this);

    this.reloadFlightTimes();
  }



  setFlightTimes(flightTimes) {
    console.log(flightTimes);
    this.setState({allFlights: flightTimes});
  } 


  reloadFlightTimes() {
    getAllFlights(this.setFlightTimes);
  }

  render() {
    getAllFlights(console.log);
    let allFlights;
    if(this.state.allFlights) {
      allFlights = this.state.allFlights
    }
    else {
      allFlights = [
        {
          id: '111',
          date: (new Date('2019-04-29T21:11:39')).toDateString(),
          offBlock: '13:37',
          takeOff: '14:00',
          landing: '14:30',
          onBlock: '14:50'
        },
        {
          id: '222',
          date: (new Date('2019-05-03T11:00:00')).toDateString(),
          offBlock: '12:10',
          takeOff: '12:15',
          landing: '14:30',
          onBlock: '14:40'
        }
      ];
    } 
    

    const columns = [{
      Header: 'Date',
      accessor: 'date'
    }, {
      Header: 'Off Block',
      accessor: 'offBlock'
    }, {
      Header: 'Take off',
      accessor: 'takeOff'
    }, {
      Header: 'Landing',
      accessor: 'landing'
    }, {
      Header: 'On Block',
      accessor: 'onBlock'
    }];
    return (
      <div className="App">
        <h1>All flights</h1>

        <ReactTable
          data={allFlights}
          columns={columns}
        />
      </div>
    );
  }
}

export default App;
