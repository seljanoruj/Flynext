import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./sass/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


class Birinci extends Component {
  render() {
    return (
      <section className='first-section'>
        <div className="container">
            <nav>
              <div className="image"><img src="image/logo.png" alt="" /></div>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Faq</li>
                <li>Contact Us</li>
                <li><i class="fa-solid fa-magnifying-glass"></i></li>
                <button><i class="fa-solid fa-plane"></i> Book Now</button>
              </ul>
            </nav>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 pt-5">
              <div className="left">
              <h1>Fly<span>next</span></h1>
              <h2>Book a private jet instantly</h2>
              <h3>Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a <br /> professional service.</h3>
              <div className="last">
              <button><i class="fa-solid fa-chevron-right"></i> Make Your Trip</button>
              <button className='buttn'>Request Quote <i class="fa-solid fa-right-long"></i></button>
              </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-6 col-12">
              <div className="right">
                <img src="image/plane.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

class Ikinci extends Component {
  render() {
    return (
      <section className='second-section'>
        <div className="container h-75">
          <div className="row h-100">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 h-100">
              <div className="first h-100">
              <div className="text">
              <a href="">Business Jet Charter</a>
              <h1>Trade crowded airports and wasted time for <br /> the ease, comfort, and convenience of travel <br /> by private jet.</h1>
              <button><i class="fa-solid fa-plane"></i>Book Now</button>
              </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 h-100">
              <div className="second h-100">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

class Ucuncu extends Component{
  render(){
    return(
      <section className='third-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-6 col-12">
              <div className="text">
                <h1>About <span>Flynext</span></h1>
                <h2>Private Jet Charters save your time and give more comfort</h2>
                <h3>Flynext is the only way to fully travel on your terms. Whether it’s accessing a remote destination or taking back control of productivity and flight scheduling</h3>
                <div className="text-bg">
                  <div className="left">
                  <h3>Call for book an order</h3>
                  <a href="#">8-800-10-500</a>
                  </div>
                  <button> <i class="fa-solid fa-plane"></i> Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

class App extends Component{
  render(){
    return(
      <>
      <Birinci/>
      <Ikinci/>
      <Ucuncu/>
      </>
    )
  }
}
ReactDOM.render(<App />,document.querySelector("#root"));