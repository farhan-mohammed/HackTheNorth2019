import React from 'react';
import './SOAPSum.css'

const file = require("../text.txt");

class SOAPSum extends React.Component{
    render(){
        return (<div className="SOAPSum">
            <div className="SOAPSum-title" style={{"background-color":`${this.props.color||''}`}}>
                <span className="SOAPSum-title-1">{this.props.title.substring(0,1)}</span>{this.props.title.substring(1)}
            </div>
            <div className="SOAPSum-key">
                {this.props.descp}
            </div>
        </div>)
    }
}
SOAPSum.defaultProps={title:'NO title',descp:'No description!!!!'}

export default SOAPSum