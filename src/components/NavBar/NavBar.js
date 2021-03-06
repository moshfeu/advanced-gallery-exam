import React from 'react';
import LogoText from "./../../assets/FlickrLogo.png";
import { Nav, Image } from 'react-bootstrap';
import BackgroundImage from "./../../assets/background.jpg";
import "./NavBar.scss";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
    render() {
        return (
          <Nav className="nav-bar panel fixed-top navbar-expand-sm navbar-light bg-white"> 
            <div className="left-header">
              <Image className="logo-image" src={LogoText} />
            </div>
            <div>
              {!this.props.name ?
                <div>
                  <a href="https://www.flickr.com/" target="_blank" className="link-button join-flickr">Join the Flickr Community </a>
                </div> 
                :
                <div style={{display: "inline-flex"}}>
                  <h4 className="name-nav-bar">Welcome {this.props.name}!</h4>
                  <a className="link-button search" href="/#app-root">Back To Top</a>            
                  <a href="https://www.flickr.com/" target="_blank" className="link-button join-flickr">Join the Flickr Community </a>
                </div> 
              }
            </div>
          </Nav>
        )
    }
}

export default NavBar; 