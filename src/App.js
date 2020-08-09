import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/cardlist'
import Searchbox from './components/searchbox'

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      informations: [],
      searchfield:""
    };
    this.handleOnserach = this.handleOnserach.bind(this)
  }
  componentDidMount() 
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => { 
      this.setState({informations: users})
    });
  }

  handleOnserach(event)
  {
    this.setState({searchfield : event.target.value})
  }
  render() 
  {
    const { informations, searchfield } =  this.state;  
    const filteredmonsters = informations.filter(information =>
      information.name.toLowerCase().includes(searchfield.toLowerCase())
      );

    return(
      <div className="App">
        <h1 className="h1">PINK ROLODEX</h1>
        <Searchbox handleOnserach= {this.handleOnserach}/>
        <Cardlist informations = {filteredmonsters}/>
       
      </div>
    )
  }
}

export default App;
