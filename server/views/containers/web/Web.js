import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './../../publics/web/css/bootstrap.min.css';
import './../../publics/web/css/animate.css';
import './../../publics//web/css/flexslider.css';
import './../../publics/web/css/fancybox/jquery.fancybox.css';
import './../../publics/web/css/style.css';
import './../../publics/web/skins/default.css';
import './../../publics/web/js/jquery.js';
import './../../publics/web/js/jquery.easing.1.3.js';
import './../../publics/web/js/bootstrap.min.js';
import './../../publics/web/js/jquery.fancybox.pack.js';
import './../../publics/web/js/jquery.fancybox-media.js';
import './../../publics/web/js/google-code-prettify/prettify.js';
import './../../publics/web/js/portfolio/jquery.quicksand.js';
import './../../publics/web/js/portfolio/setting.js';
import './../../publics/web/js/jquery.flexslider.js';
import './../../publics/web/js/animate.js';
import './../../publics/web/js/custom.js';
import WebHeaderContainer from './WebHeaderContainer';
import WebContentContainer from './WebContentContainer';
import WebFooterContainer from './WebFooterContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class Web extends Component {
   constructor(props) {
    super(props);
    this.store=props.store;
    injectTapEventPlugin();
  }
  render() {
    return (
      <div>
      <WebHeaderContainer store={this.store}/>
      <WebContentContainer store={this.store}/>
      <WebFooterContainer store={this.store}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
     
    }
  }
Web= withRouter(connect(mapStateToProps)(Web));
export default Web;
