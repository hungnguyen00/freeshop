import React, { Component } from 'react';
class WebFooter extends Component {
   constructor(props) {
    super(props);
    this.props=props;
    this.store=props.store;
    this.dispatch=props.dispatch;
    this.state = {
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose=this.handleRequestClose.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this);
  }
  handleTouchTap = (event) => {
   
    
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleRequestClose = () => {
   
  };
  render() {
          
    return (
      <div>
      <footer>
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="widget">
          <h5 className="widgetheading">Get in touch with us</h5>
          <address>
          <strong>Moderna company Inc</strong><br/>
           Modernbuilding suite V124, AB 01<br/>
           Someplace 16425 Earth 
           </address>
          <p>
            <i className="icon-phone"></i> (123) 456-7890 - (123) 555-7891 <br/>
            <i className="icon-envelope-alt"></i> email@domainname.com
          </p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="widget">
          <h5 className="widgetheading">Pages</h5>
          <ul className="link-list">
            <li><a href="#">Press release</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Career center</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="widget">
          <h5 className="widgetheading">Latest posts</h5>
          <ul className="link-list">
            <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
            <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
            <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="widget">
          <h5 className="widgetheading">Flickr photostream</h5>
          <div className="flickr_badge">
            <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"></script>
          </div>
          <div className="clear">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="sub-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="copyright">
            <p>
              <span>&copy; Moderna 2014 All right reserved. By </span><a href="http://bootstraptaste.com" target="_blank">Bootstraptaste</a>
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="social-network">
            <li><a href="#" data-placement="top" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" data-placement="top" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" data-placement="top" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#" data-placement="top" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
            <li><a href="#" data-placement="top" title="Google plus"><i className="fa fa-google-plus"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </footer>
    </div>
    );
  }
}

export default WebFooter;
