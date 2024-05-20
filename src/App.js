import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TitanList from './TitanList';
import TitanAdd from './TitanAdd';
import { titanAddAll } from './actions';

class App extends React.Component {
    componentDidMount() {
        fetch('/api/titans').then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }).then((data) => {
            this.props.dispatch(titanAddAll(data));
        }).catch((error) => {
            console.error('There was a problem with your fetch operation:', error);
        });
    }
    
    render() {
        return (
            <div className="App">
                <Provider store={this.props.store}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<TitanList />} />
                            <Route path="/add" element={<TitanAdd />} />
                        </Routes>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default connect()(App);