import {combineReducers} from 'redux';
import showLeftBar from './LeftBarReducer';
import language from './LangReducer';
import changeComponent from './ComponentReducer';
const Reducers = combineReducers({
  showLeftBar,language,changeComponent
})
export default Reducers