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
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  handleFocus(event) {
    event.target.placeholder = '';
  }

  handleBlur(event) {
    event.target.placeholder = event.target.name.charAt(0).toUpperCase() + event.target.name.slice(1);
  }

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="form-header">Enter Your Information</h2>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                required
                placeholder="Name"
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <div className="form-group">
              <label htmlFor="phone Number"></label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                pattern="[0-9]{10}"
                required
                placeholder="Phone Number"
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <div className="form-group">
              <label htmlFor="ticket Number"></label>
              <input
                type="text"
                id="ticketNumber"
                name="ticketNumber"
                value={this.state.ticketNumber}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                minLength="6"
                maxLength="10"
                required
                placeholder="Ticket Number"
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
