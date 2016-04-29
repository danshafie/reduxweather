import React, { Component } from 'react';


export default class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange(event){

    this.setState({term: event.target.value})

  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit}
      className='input-group'>
        <input
          placeholder='Enter your favorite City forecast'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}/>
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}
