import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import prediction from './backend'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numRiders: '',
      vehicleType: '',
      expectedDuration: '',
      price: 0,
    };
  }

  
  handleSubmit = async (event) => {
    event.preventDefault();
    const { numRiders, vehicleType, expectedDuration } = this.state;

    try {
      const predictedPrice = await prediction(numRiders, vehicleType, expectedDuration);
      this.setState({ price: predictedPrice }); // Update component state
    } catch (error) {
      console.error('Error fetching prediction:', error);
      // Handle errors appropriately in the UI (e.g., display error message)
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  datacall = async() => {
    try{
      await prediction(this.state.numRiders, this.state.vehicleType, this.state.expectedDuration)
      console.log('done')
    }
    catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
      <div className="App mt5">
        <h1>Fastr</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number of riders:
            <input type="number" name="numRiders" value={this.state.numRiders} onChange={this.handleChange} />
          </label>
          <label>
            Vehicle type:
            <input type="text" name="vehicleType" value={this.state.vehicleType} onChange={this.handleChange} />
          </label>
          <label>
            Expected ride duration:
            <input type="number" name="expectedDuration" value={this.state.expectedDuration} onChange={this.handleChange} />
          </label>
          <button type="submit">Generate price</button>
        </form>
        {this.state.price !== 0 ?( 
          <p className="mt4">The fair price would be {this.state.price}</p>)
          : <>
          <p1>{this.range}</p1>
          </>}
        <ParticlesBg type="cobweb" bg={true} className='particles' />
      </div>
      </>
    )
  }
  }

export default App;
