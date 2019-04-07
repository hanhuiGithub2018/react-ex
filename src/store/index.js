//创建公共存储区域
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer);

export default store
