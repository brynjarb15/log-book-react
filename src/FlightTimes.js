import React, { Component } from 'react';

export default class FlightTimes extends Component {
    render() {
        return (
            <div>
                {this.props.flight.offBlock} {this.props.flight.onBlock} 

            </div>
        );
    }
}

