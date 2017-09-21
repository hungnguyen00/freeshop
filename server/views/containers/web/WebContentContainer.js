import { connect } from 'react-redux';
import WebContent from './../../components/web/WebContent';
import { withRouter } from 'react-router';
function mapStateToProps(state) {
		return {
			lang:state.language.lang
		}
  }
const WebContentContainer =withRouter(connect(
  mapStateToProps
)(WebContent))

export default WebContentContainer