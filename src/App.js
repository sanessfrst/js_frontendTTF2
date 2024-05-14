import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import TitanList from './TitanList';
import TitanAdd from './TitanAdd';
import { titanAddAll } from './actions';

class App extends React.Component {
	componentDidMount() {
		fetch('titans').then(function(res){
			return res.json();
		}).then((data) => {
			this.props.dispatch(titanAddAll(data));
		});
	}
		
	render() {
		 return (
		 <div className = "App">
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
