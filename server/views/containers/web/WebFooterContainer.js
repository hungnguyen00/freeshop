import { connect } from 'react-redux';
import WebFooter from './../../components/web/WebFooter';
import { withRouter } from 'react-router';
function mapStateToProps(state) {
		return {
			lang:
		}
  }
const WebFooterContainer =withRouter(connect(
  mapStateToProps
)(WebFooter))

export default WebFooterContainer