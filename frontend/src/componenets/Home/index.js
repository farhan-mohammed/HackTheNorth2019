import React from 'react';
import './Home.css'
class Home extends React.Component{
    render(){
        return (<div className="Home">
            <div className="Home-intro">
                <h1>All Patients</h1>
                <p>This is a realistic representation of patients that someone would have at a clinic, each record has been randomly generated using an external library but has blank medical records. Our app helps doctors complete their notes in a much more detailed and efficient manner as it automatically fills out nonimportant words into sentence structure for each record for easy reading.</p>
            </div>
        </div>);
    }
}

export default Home;