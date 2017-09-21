import React, { Component } from 'react';
import works1 from "./../../publics/web/img/works/1.jpg";
import works2 from "./../../publics/web/img/works/2.jpg";
import works3 from "./../../publics/web/img/works/3.jpg";
import works4 from "./../../publics/web/img/works/4.jpg";
class WebContent extends Component {
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
      <section className="callaction">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="big-cta">
                <div className="cta-text">
                  <h2><span>Moderna</span> HTML Business Template</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="content">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-3">
            <div className="box">
              <div className="box-gray aligncenter">
                <h4>Fully responsive</h4>
                <div className="icon">
                <i className="fa fa-desktop fa-3x"></i>
                </div>
                <p>
                 Voluptatem accusantium doloremque laudantium sprea totam rem aperiam.
                </p>
                  
              </div>
              <div className="box-bottom">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="box">
              <div className="box-gray aligncenter">
                <h4>Modern Style</h4>
                <div className="icon">
                <i className="fa fa-pagelines fa-3x"></i>
                </div>
                <p>
                 Voluptatem accusantium doloremque laudantium sprea totam rem aperiam.
                </p>
                  
              </div>
              <div className="box-bottom">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="box">
              <div className="box-gray aligncenter">
                <h4>Customizable</h4>
                <div className="icon">
                <i className="fa fa-edit fa-3x"></i>
                </div>
                <p>
                 Voluptatem accusantium doloremque laudantium sprea totam rem aperiam.
                </p>
                  
              </div>
              <div className="box-bottom">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="box">
              <div className="box-gray aligncenter">
                <h4>Valid HTML5</h4>
                <div className="icon">
                <i className="fa fa-code fa-3x"></i>
                </div>
                <p>
                 Voluptatem accusantium doloremque laudantium sprea totam rem aperiam.
                </p>
                  
              </div>
              <div className="box-bottom">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="solidline">
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Recent Works</h4>
        <div className="row">
          <section id="projects">
          <ul id="thumbs" className="portfolio">
            <li className="col-lg-3 design" data-id="id-0" data-type="web">
            <div className="item-thumbs">
            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Work 1" href="img/works/1.jpg">
            <span className="overlay-img"></span>
            <span className="overlay-img-thumb font-icon-plus"></span>
            </a>
            <img src={works1} alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
            </div>
            </li>
            <li className="item-thumbs col-lg-3 design" data-id="id-1" data-type="icon">
            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Work 2" href="img/works/2.jpg">
            <span className="overlay-img"></span>
            <span className="overlay-img-thumb font-icon-plus"></span>
            </a>
            <img src={works2} alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
            </li>
            <li className="item-thumbs col-lg-3 photography" data-id="id-2" data-type="illustrator">

            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Work 3" href="img/works/3.jpg">
            <span className="overlay-img"></span>
            <span className="overlay-img-thumb font-icon-plus"></span>
            </a>

            <img src={works3} alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
            </li>


            <li className="item-thumbs col-lg-3 photography" data-id="id-2" data-type="illustrator">

            <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Work 4" href="img/works/4.jpg">
            <span className="overlay-img"></span>
            <span className="overlay-img-thumb font-icon-plus"></span>
            </a>
            <img src={works4} alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
            </li>
          </ul>
          </section>
        </div>
      </div>
    </div>

  </div>
  </section>
      </div>
    );
  }
}

export default WebContent;
