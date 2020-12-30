import React from 'react';
import "./Form.style.css";

function Form(props) {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control form-control-lg" name="city" autoComplete="off" placeholder="city" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control form-control-lg" name="Country" autoComplete="off" placeholder="country" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get weather</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter city and Country!
        </div>
    )
}

export default Form
