import './App.css';
import React from 'react';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import UserList from './pages/login';
// import UserDetail from './pages/forgotpsw';

class App extends React.Component {
  render(){
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <i className="fa fa-user-circle" style={{fontSize:"110px"}}>
            </i>
          </h4>

          <div className="image"></div>
        </div>
        
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="E-mail"/>
            </div>
            <div className="input-group mb3">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i class="fa fa-lock"></i> </span>
              </div>

            <input type="text" className="form-control" placeholder="Şifre"/>
            </div>

            <button type="button" className="btn btn-secondary btn-block">GİRİŞ YAP</button>
            <div className="message">
              <div> <input type="checkbox"/>Beni Hatırla </div>
              
            <div>
                <a href="#" input="value">parolanızı mı unuttunuz</a>
              </div>                

            </div>

          </form>
          {/* <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div> */}


        </div>

      </div> 
    </div>
  );
}
}

export default App;


