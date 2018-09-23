/**
 * Created by Angela on 2018/8/4.
 */
import React, {Component}  from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import AsyncLoader from "../AsyncLoader";
import ReduxDemo from '../components/ReduxDemo';
import CounterPage from './CounterPage';

import store from '../store';

export default class BasicExample extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router basename='/'>
                        <div>
                            <ul>
                                <li><Link to="/">Home122</Link></li>
                                <li><Link to="/topics">Topics</Link></li>
                                <li><Link to="/counter">Counter</Link></li>
                            </ul>
                            <hr/>
                            <Route exact path="/" component={Home}/>
                            <Route path="/topics" component={Topics}/>
                            {/*<Route path="/counter" render={() => <AsyncLoader path="CounterPage.js"/>}/>*/}
                            <Route path="/counter" component={CounterPage}/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}
class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <ReduxDemo/>
            </div>
        )
    }
}

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)
const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)
