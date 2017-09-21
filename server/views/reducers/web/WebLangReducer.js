import Lang from './../../langs/web/Lang'; 
import {LANG} from './../../actions/web/WebLangAction';
function language(state={lang:new Lang().lang_vn},action){
  switch (action.type) {
    case LANG:
      let langs=new Lang();
      let lang=langs.lang_vn;
      if(action.lang=='lang_en')
      {
        lang=langs.lang_en
      }
      return {lang:lang}
    default:
      return state
  }
}
export default language