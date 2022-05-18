import React, { Component } from 'react';
import '/Users/taylorbirchem/take-home/src/components/Radio.css';
import ReactDOM from 'react-dom';


class Radio extends React.Component {
    constructor(props){
      super(props);
      // this.state = {year: '2015'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.props.setYear(event.target.value)
      // this.setState({year: event.target.value});
    }

    handleSubmit(event) {
      //alert('Year: ' + this.props.year);
      event.preventDefault();
    }

  render(){
    return (
  <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
    <div className="relative flex min-h-screen flex-col justify-start mt-5 overflow-hidden bg-gray-50 py-8 lg:py-12">
      <div className="mx-auto max-w-prose lg:text-lg"></div>
      <div className="m-5">
        <div className="flex justify-left ">
        <label> Years:</label>
        <div className="form-check form-check-inline ml-1" >
          <input className ="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          id="RadioAll"
          name="year"
          value="all"
          onChange={this.handleChange} checked={this.props.year === 'all'}/>
          <option className="form-check-label inline-block text-gray-800" for="RadioAll">All</option >
        </div>
          <div className="form-check form-check-inline ml-2" >
            <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            id="Radioyear1"
            name="year"
            value="2015"
            onChange={this.handleChange}
            checked={this.props.year === '2015'}
            />
            <option className="form-check-label inline-block text-gray-800" for="Radioyear1" >2015</option>
          </div>
          <div className="form-check form-check-inline ml-2" >
            <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="year"
            id="Radioyear2"
            value="2016"
            onChange={this.handleChange}
            checked={this.props.year === '2016'}
            />
            <option className="form-check-label inline-block text-gray-800" for="Radioyear2" >2016</option >
          </div>
            <input type="submit" value="Submit" class="font-serif w-small flex justify-left border border-transparent rounded-md shadow-sm text-sm text-black bg-gray-300 hover:bg-grey-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ml-3"/>
        </div>
      </div>
    </div>
  </form>
);
}}

export default Radio;
