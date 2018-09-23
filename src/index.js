import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// APP
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

// BasicExample
import BasicExample from './pages/BasicExample';
ReactDOM.render(<BasicExample />, document.getElementById('root'));

// counter
// import { createStore } from 'redux'
// import Counter from './components/Counter'
// import counter from './reducers/counter'
//
// const store = createStore(counter)
// const rootEl = document.getElementById('root')
//
// const render = () => ReactDOM.render(
//     <Counter
//         value={store.getState()}
//         onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//         onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//     />,
//     rootEl
// )
//
// render()
// store.subscribe(render)

// counter1
// import { Component } from 'react'
// import PropTypes from 'prop-types'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'
//
// // React component
// class Counter extends Component {
//     render() {
//         const { value, onIncreaseClick } = this.props
//         return (
//             <div>
//                 <span>{value}</span>
//                 <button onClick={onIncreaseClick}>Increase</button>
//             </div>
//         )
//     }
// }
//
// Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
// }
//
// // Action
// const increaseAction = { type: 'increase' }
//
// // Reducer
// function counter(state = { count: 0 }, action) {
//     const count = state.count
//     switch (action.type) {
//         case 'increase':
//             return { count: count + 1 }
//         default:
//             return state
//     }
// }
//
// // Store
// const store = createStore(counter)
//
// // Map Redux state to component props
// function mapStateToProps(state) {
//     return {
//         value: state.count
//     }
// }
//
// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//     return {
//         onIncreaseClick: () => dispatch(increaseAction)
//     }
// }
//
// // Connected Component
// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter)
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )

registerServiceWorker();
