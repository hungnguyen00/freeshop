import React, { Component } from 'react';
import {language} from './../../actions/web/WebLangAction';
import logohtseafood from "./../../publics/images/logohtseafood.svg";
import sliderone from "./../../publics/web/img/slides/1.jpg";
import slidertwo from "./../../publics/web/img/slides/2.jpg";
import sliderthree from "./../../publics/web/img/slides/3.jpg";
class WebHeader extends Component {
   constructor(props) {
    super(props);
    this.props=props;
    this.store=props.store;
    this.dispatch=props.store.dispatch;
    this.state = {
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose=this.handleRequestClose.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this);
  }
  handleTouchTap = (event) => {
    alert('haha');
    this.dispatch(language('lang_en'));
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleRequestClose = () => {
   
  };
  render() {
          
    return (
      <div>
      <header>
        <div className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <img className="image-logo" src={logohtseafood} />
                </div>
                <div className="navbar-collapse collapse ">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="index.html">{this.props.lang.menu_home}</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle " data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false">{this.props.lang.menu_product}<b className=" icon-angle-down"></b></a>
                            <ul className="dropdown-menu">
                                <li><input type="button" onClick={this.handleTouchTap} value="Submit" /></li>
                                <li><a href="components.html">Bạch Tuộc</a></li>
                                <li><a href="pricingbox.html">Tôm</a></li>
                            </ul>
                        </li>
                        <li><a href="portfolio.html">{this.props.lang.menu_about}</a></li>
                        <li><a href="blog.html">{this.props.lang.menu_contact}</a></li>
                        <li><a href="contact.html">{this.props.lang.menu_service}</a></li>
                    </ul>
                </div>
            </div>
        </div>
  </header>
  <section id="featured">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div id="main-slider" className="flexslider">
            <ul className="slides">
              <li>
                <img src={sliderone} alt="" />
                <div className="flex-caption">
                    <h3>Modern Design</h3> 
          <p>Duis fermentum auctor ligula ac malesuada. Mauris et metus odio, in pulvinar urna</p> 
          <a href="#" className="btn btn-theme">Learn More</a>
                </div>
              </li>
              <li>
                <img src={slidertwo} alt="" />
                <div className="flex-caption">
                    <h3>Fully Responsive</h3> 
          <p>Sodales neque vitae justo sollicitudin aliquet sit amet diam curabitur sed fermentum.</p> 
          <a href="#" className="btn btn-theme">Learn More</a>
                </div>
              </li>
              <li>
                <img src={sliderthree} alt="" />
                <div className="flex-caption">
                    <h3>Clean & Fast</h3> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec mer lacinia.</p> 
          <a href="#" className="btn btn-theme">Learn More</a>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>  
  </section>
  </div>
    );
  }
}

export default WebHeader;
