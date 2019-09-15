import React from 'react'
import "./UserSummary.css"
class UserSummary extends React.Component{
    onHov=()=>{this.props.hoverCheck(this.props.id)
    console.log('uauauauaua')}
    render(){
        return(<div onMouseOver={this.onHov}>
            <div className="US">
                <div className="US-img"><img alt=" " src="https://picsum.photos/200/250"></img></div>
                <div className ="US-info">
                    <div className="US-name">
                        <span className='default-text'>Name: </span>
                        <span>{this.props.user.name}</span></div>
                    <div className="US-id">
                        <span className='default-text'>Patient ID:</span> {this.props.user.id}</div>
                    <div className="US-num">
                        <span className='default-text'>Number Of Records: </span>{this.props.user.numRecords}</div>
                    <div className='US-upt'>
                        <span className='default-text'>Last Updated: </span>
                        <span className='unique-text'>{this.props.user.lastUpdated}</span>
                        </div>
                </div>
            </div>
        </div>)
    }
}
UserSummary.defaultProps={
    user:{
        name:"Farhan Mohammed",
        id:'12312sdas2',
        numRecords:5,
        lastUpdated: (new Date()).toDateString()
    },
    image:'',
    hoverCheck:()=>''
}
export default UserSummary