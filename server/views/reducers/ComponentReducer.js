import {CHANGE} from './../actions/ComponentAction';
import  DashBoardComponent from './../components/DashBoardComponent';
function changeComponent(state={component:DashBoardComponent},action){
	switch (action.type) {
    case CHANGE:
      return {component:action.component}
    default:
      return state
  }
}
export default changeComponent