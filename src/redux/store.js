/**
 * 该文件用来 export 一个 store 对象，整个应用只有一个 store 对象
 */
// applyMiddleware,专用于异步 action
import { createStore, applyMiddleware } from 'redux'  //  引用 createStore 创建 store 对象
import thunk from 'redux-thunk'  // 用于支持异步 action

import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'  // 用于开发者工具



export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))