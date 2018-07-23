import React from 'react';

import 'owfont/css/owfont-regular.css';

const Details = props => (
    <div className="row weather-row">
        <div className="col-md-2 weather-row__weather">
            <div className={`owf owf-${props.weather.id}`} />
            <br/>
            <span>{props.weather.main}</span>
        </div>
        <div className="col-md-3 weather-row__date">
        {props.date.format('MMM D')}<br />
        {props.date.format('ha')}
        </div>
        <div className="col-md-3 weather-row__humidity">
        <span>{Math.round(props.humidity)}%<br />humidity</span>
        </div>
        <div className="col-md-3 weather-row__temp">
        <span>{Math.round(props.temp)}<sup>o</sup><span>C</span></span>

        </div>
    </div>
);

export default Details;