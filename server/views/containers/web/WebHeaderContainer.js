import { connect } from 'react-redux';
import WebHeader from './../../components/web/WebHeader';
import { withRouter } from 'react-router';
function mapStateToProps(state) {
	console.log(state);
		return {
			lang:state.language.lang
		}
  }
const WebHeaderContainer =withRouter(connect(
  mapStateToProps
)(WebHeader))

export default WebHeaderContainer