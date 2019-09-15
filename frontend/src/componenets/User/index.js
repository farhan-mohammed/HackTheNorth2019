import React from 'react'
import UserSummmary from './UserSummary'
import {Link} from 'react-router-dom'
import './User.css'
class User extends React.Component{
    state={
        currentPatient:''
    }
    hoverUser=x=>this.setState({currentPatient:x})
    showSummary=()=>{
        console.log('YOYOYO')
        if (this.state.currentPatient!==''){
            return (<div>Patient {this.state.currentPatient} Currently Selected</div>)
        } else{
            return (<div className="UD-sum-none">Hover over a patient To view a few more details</div>)
        }
    }
    leftArrow=()=>this.props.search.currentPage<=1?'':<i className="chevron left icon" />
    rightArrow=()=>this.props.search.currentPage>=this.props.search.total/5?'':<i className="chevron right icon" />
    render(){
        return(<div className="Users">
            <div className="Users-detail">
                <div className="UD-num">Showing result {this.props.search.start} - {this.props.search.end} out of {this.props.search.total}</div>
                <div className="UD-sum">{this.showSummary()}</div>
                <div className="UD-page">{this.leftArrow()} Page {this.props.search.currentPage} {this.rightArrow()}</div>
            </div>
            <div className="Users-list">
                <Link to="/user/11">
                    <UserSummmary id={11} hoverCheck={this.hoverUser}></UserSummmary>
                </Link>
                <Link to="/user/22">
                    <UserSummmary id={22} hoverCheck={this.hoverUser}></UserSummmary>
                </Link>
                <Link to="/user/33">
                    <UserSummmary id={33} hoverCheck={this.hoverUser}></UserSummmary>
                </Link>
                <Link to="/user/44">
                    <UserSummmary id={44} hoverCheck={this.hoverUser}></UserSummmary>
                </Link>
                <Link to="/user/55">
                    <UserSummmary id={55} hoverCheck={this.hoverUser}></UserSummmary>
                </Link>
            </div>
        </div>)
    }
}
User.defaultProps={
    search:{
        start:0,
        end:5,
        total:2312313,
        currentPage:1
    }
}
 export default User;