import React from 'react'
import "./weather.style.css"

function minmaxTemp(min, max) {

    return (

        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )



}


function Weather(props) {
    return (
        <div>
            <div className="container text-light">
                <div className="card">
                    <h1 className="text-white py-3">{props.city}</h1>
                    <h5 className="py-4">
                        <i className={`wi ${props.WeatherIcon} display-1`}></i>
                    </h5>

                    <h1 className="py-2">{props.temp_cel}&deg;</h1>

                    {minmaxTemp(props.temp_max, props.temp_min)}
                    <h4 className="py-3">{props.description.charAt(0).toUpperCase() +
                        props.description.slice(1)}</h4>
                </div>
            </div>
        </div>
    )
}

export default Weather
