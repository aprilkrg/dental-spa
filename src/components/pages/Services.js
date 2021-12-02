import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
  render() {
    const allServices = this.props.services.map(service => (
      <li>
        <Link to={`/services/${service.id}`}>{service}</Link>
      </li>
    ))
    return (
      <div>
        <h1>Services</h1>
        <ul>
          {allServices}
        </ul>
      </div>
    )
  }
}

export default Services