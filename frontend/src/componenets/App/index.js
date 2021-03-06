import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import SOAP from '../SOAP' 
import User from '../User' 
import UserProfile from '../User/UserProfile'
import './css/main.css'
import Index from '../Home'


class App extends React.Component {
    isActive=(x)=> x===this.state.activeTab?'hs-li active':'hs-li'
    olalal=()=>{
      if (window.location.pathname==="/"){
         return 0 
      }else if (window.location.pathname==="/contact"){
          return 2
      }else{
         return 1
      }
    }
    state={activeTab:this.olalal()}
tabBottom = '4px #9ad6d5 solid';
    render(){
      console.log(window.location)
        return (<div className="App">
            
        <Router>
            <header className="App-header">
                <article className="container App-header-son ">
                  <img className="hs-img " src="https://i.ibb.co/BN97H0c/logo.png" alt=""></img>
                  <div className="hs-title"><Link to="/">HackTheNorth2019</Link></div>
                  <ul className="hs-ul">
                    <li className={this.isActive(0)} style={{borderBottom:this.state.activeTab===0?this.tabBottom:''}}><Link to="/" onClick={ ()=> this.setState({activeTab:0})}>Home</Link></li>
                    <li className={this.isActive(1)}  style={{borderBottom:this.state.activeTab===1?this.tabBottom:''}}><Link to="/user"  onClick={()=>this.setState({activeTab:1})}>User</Link></li>
                    <li className={this.isActive(2)}  style={{borderBottom:this.state.activeTab===2?this.tabBottom:''}}><Link to ="/contact" onClick={()=>this.setState({activeTab:2})}>What is this?</Link></li>
                  </ul>
                </article>
            </header>
            <section className="App-body">
                  <div className="container mainbody">
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/user" exact component={User}></Route>
                    <Route path = "/user/:id"  component={UserProfile}></Route>
                  </div>
            </section>
        </Router>

        </div>)
    }
}
export default App;

