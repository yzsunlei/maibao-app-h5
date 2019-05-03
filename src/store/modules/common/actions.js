import * as types from './types';

export default {
  setHeader ({ commit, state }, header) {
    try{
      document.title = header.title;
    } catch (e){}
    commit(types.SET_HEADER, header)
  },
  mergeHeader({ commit, state }, header){
    if(header.title) {
      try {
        document.title = header.title;
      } catch (e){}
    }
    commit(types.MERGE_HEADER, header);
  }
}
