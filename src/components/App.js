import React, { Component } from "react";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              src="/images/docker-tile.svg"
              width="30"
              height="30"
              alt=""
              title="Docker.js"
              className="nav-logo"
            />
            <img
              src="/images/nodejs-seeklogo.com.svg"
              width="30"
              height="30"
              alt=""
              title="Node.js"
              className="nav-logo"
            />
            <img
              src="/images/react-seeklogo.com.svg"
              width="30"
              height="30"
              alt=""
              title="React"
              className="nav-logo"
            />
            <img
              src="/images/bootstrap-solid.svg"
              width="30"
              height="30"
              alt=""
              title="Bootstrap"
              className="nav-logo"
            />
          </a>
          <span style={{ cursor: "pointer" }}>
            {this.state.date.toLocaleTimeString()}
          </span>
        </nav>
        <header>
          <img src="/images/Docker.png" className="responsive" />
        </header>
        <div className="container-fluid">
          <div className="card text-center">
            <div className="card-header title">Featured</div>
            <div className="card-body">
              <h5 className="card-title">
                Docker + Node.js + React + Bootstrap
              </h5>
              <p className="card-text text">Credit</p>
              <p className="card-text text">
                <a
                  href="https://medium.com/@thanatchakromsang/%E0%B8%A1%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%9A-react-%E0%B8%A2%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AA%E0%B9%88-container-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-react-docker-45ece149d603"
                  target="_bank"
                >
                  มาจับ React ยัดใส่ Container กันเถอะ! (React+Docker)
                </a>
              </p>
            </div>
          </div>
        </div>
        <footer className="footer mt-5">
          <div className="footer-content">
            <a href="https://www.youtube.com" target="_bank">
              <i className="icon icon-youtube mr-1" />
            </a>
            <a href="https://www.facebook.com" target="_bank">
              <i className="icon icon-facebook mr-1" />
            </a>
            <a href="https://www.twitter.com" target="_bank">
              <i className="icon icon-twitter mr-1" />
            </a>
            <a href="https://www.instagram.com" target="_bank">
              <i className="icon icon-instagram mr-1" />
            </a>
            <p className="text-muted">© 2018 Copyright: Santikon Apai</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
