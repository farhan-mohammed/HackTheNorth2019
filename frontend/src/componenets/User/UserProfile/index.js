import React from 'react';
import './UserProfile.css'
import Record from '../../Record'
class UserProfile extends React.Component{
    leftArrow=()=>this.props.records.currentPage<=1?'':<i className="chevron left icon" />
    rightArrow=()=>this.props.records.currentPage>=this.props.records.total/5?'':<i className="chevron right icon" />
    
    checkValid=()=>{
        if (parseInt(this.props.match.params.id) /* is valid*/){
            return (<div className="UP">
                <div className="UP-info">xd</div>
                <div className="UP-navi"> {this.leftArrow()} Page {this.props.records.currentPage} {this.rightArrow()} </div>
                <div className="UP-list">
                    <Record></Record>
                </div>
            </div>)
        } else{
            return <div className="who"><div>A Who?</div></div>
        }
    }
    render(){
        console.log(this.props.match.params.id)
        return this.checkValid()
    }
    
}
UserProfile.defaultProps={
    records:{
        currentPage:0,
        start:0,
        end:0
    }
}
export default UserProfile