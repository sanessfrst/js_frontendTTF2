import React from 'react';


class Titan extends React.Component {
	constructor(props){
			super(props)
			
			this.state = {
			Status: this.props.ttn.Status
			}
			
			this.onStatusClick = this.onStatusClick.bind(this);
			this.onDeleteClick = this.onDeleteClick.bind(this);
		}
	onStatusClick(e) {
		e.preventDefault();
		
		fetch(`titans/${this.props.ttn._id}`, {
			method: 'PATCH',
			body:JSON.stringify ({
				Status: !this.state.Status
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then((res) => {
				if (res.status === 200) {
				console.log('Updated');
				this.setState({
					Status: !this.state.Status
				});
			}
			else{
				console.log('Not updated');
			}
		});
	}
	
	onDeleteClick(e) {
		e.preventDefault();
		
		fetch(`titans/${this.props.ttn._id}`, {
			method: 'DELETE'
			}).then((res) => {
				if (res.status === 200) {
				console.log('Deleted');
				this.props.onTitanDelete(this.props.ttn._id)
			}
			else{
				console.log('Not deleted');
			}
		});
	}
	
	render() {
		return (
			<li> 
				<span>{this.props.ttn.name} </span>
				<span><i>{this.props.ttn.description}</i> </span>
				<span onClick={this.onStatusClick}><b>{this.state.Status ? 'Alive' : 'Dead'}</b> </span>
				<button onClick={this.onDeleteClick}>Delete</button>
			</li>
		)
	}
}

export default Titan;