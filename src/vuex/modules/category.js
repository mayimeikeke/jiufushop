import Util from '../../util/common'
import * as types from '../types'

// 默认从第0个tabindex开始展示
const state = {
  tabIndex:0
}
// 同步数据管家 : 改变tabindex值
const mutations = {
  [types.CHANGE_TABINDEX] (state,res) {
    state.tabIndex = res
  }
}

export default {
  state,
  mutations
}
