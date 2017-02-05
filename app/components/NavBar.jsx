import { Navbar, Nav, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
export default class Header extends Component {


  constructor() {
    super();
    this.state = { className: '' };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleClick(event) {
    event.target.blur();
  }
  handleScroll(e) {
    setTimeout(() => {
      if (document.body.scrollTop > 50) {
        this.setState({ className: 'navbar-fixed-top' });
      } else {
        this.setState({ className: '' });
      }
    }, 200);
  }
  render() {
    return (
      <Navbar id="nav-header" ref={(ref) => { this.navbar = ref; }} className={this.state.className} collapseOnSelect onFocus={this.handleClick}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#section1">
              <img
                width="80" style={{ display: 'inline' }}
                src="http://bootstrap.cn/wp-content/themes/tob/img/logo.png"
                alt="http://bootstrap.cn/"
              />
                同洲源</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">饮用水</NavItem>
            <NavItem eventKey={2} href="#">饮水设备</NavItem>
            <NavItem eventKey={3} href="#">净水设备</NavItem>
            <NavItem eventKey={4} href="#">会展服务</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">关于</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
