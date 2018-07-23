import React, { Component } from 'react';

import moment from 'moment';

import Details  from './Details';

const API_KEY = 'c4accfd5c8be7c628489bfa23554f59b';

class Weather extends Component {
    state = {
        details: undefined,
        city: undefined,
        country: undefined,
        error: undefined,
        population: undefined
      };

    getWeatherForecast = async() => {
        const city = 'Bengaluru';
        const country = 'IN';
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
        const data = await api_call.json();
        this.changeState(data);
      }
      changeState(data) {
             this.setState({
              details: data.list.map(item => ({
				date: moment(item.dt * 1000),
				temp: item.main.temp,
				humidity: item.main.humidity,
				weather: item.weather[0],
			})),
              city: data.city.name,
              country: data.city.country,
              population: data.city.population,
              error: undefined
          });
          this.renderForeCast();
          console.log(this.state.details, 'details')
      }
      renderForeCast() {
          
           return this.state.details.map((element,i) => {
                return <Details 
                key = {i}
                date = {element.date}
                temp = {element.temp}
                humidity = {element.humidity}
                weather = {element.weather}
            />
              })

      }
      
      componentDidMount() {
          this.getWeatherForecast();
      }
      
    render() {
        let forecastComponent;
        if(this.state.details) {
            forecastComponent = this.renderForeCast();
        }

        return (
            this.state.details === undefined ? (
                <div className="loading">
                    {this.state.error && <p>Error in getting data, try again later.</p>}
                    {<div className="spinner"></div>}
                </div>
              ) : (
            <div className="weather-details col-md-12">
                <div className="weather-details__card col-md-10">
                    {forecastComponent}
                </div>
            </div>)
        );
    };
};


export default Weather;

