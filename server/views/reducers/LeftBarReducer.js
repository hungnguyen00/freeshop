import {SHOWLEFTBAR} from './../actions/LeftBarAction';

function showLeftBar(state={open:false,navpadding:0},action){
	switch (action.type) {
    case SHOWLEFTBAR:
    var leftbar={open:false,navpadding:0};
      if(action.open)
      {
          leftbar={
          open:action.open,
          navpadding:action.navpadding
        }
      }
      return leftbar
    default:
      return state
  }
}
export default showLeftBar