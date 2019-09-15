import React from 'react'
import UserSummmary from './UserSummary'
import './User.css'
class User extends React.Component{
    render(){
        return(<div style={{margin:'0 10px'}}>
            <UserSummmary></UserSummmary>
        </div>)
    }
}
 export default User;