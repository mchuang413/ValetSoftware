import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      ticketNumber: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Form submitted with values:\n' +
      'Name: ' + this.state.name + '\n' +
      'Phone Number: ' + this.state.phoneNumber + '\n' +
      'Ticket Number: ' + this.state.ticketNumber);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="form-header">Enter Your Information</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                pattern="[0-9]{10}"
                required
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <div className="form-group">
              <label htmlFor="ticketNumber">Ticket Number</label>
              <input
                type="text"
                id="ticketNumber"
                name="ticketNumber"
                value={this.state.ticketNumber}
                onChange={this.handleChange}
                minLength="6"
                maxLength="10"
                required
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
