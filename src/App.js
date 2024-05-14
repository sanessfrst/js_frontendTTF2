import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import TitanList from './TitanList';
import TitanAdd from './TitanAdd';


class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			titans: []
		}
		
		this.onTitanAdd = this.onTitanAdd.bind(this);
		this.onTitanDelete = this.onTitanDelete.bind(this);
	}
	
	componentDidMount() {
		fetch('titans').then(function(res){
			return res.json();
		}).then((data) => {
			this.setState({
				titans: data
			})
		});
	}
		
	onTitanAdd(ttn){
		this.setState({
			titans: [...this.state.titans, ttn]
			});
		}
		
	onTitanDelete(_id){
		this.setState({
			titans: this.state.titans.filter(function(ttn) {
				return ttn._id !== _id;
			})
		});
	}
		
	render() {
		 return (
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" element={<TitanList titans={this.state.titans} onTitanDelete={this.onTitanDelete}/>} />
						<Route path="/add" element={<TitanAdd onTitanAdd={this.onTitanAdd} />} />
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
