import React from 'react';
import { connect } from 'react-redux';
import { titanDelete, titanUpdateState } from './actions'

class Titan extends React.Component {
	constructor(props){
			super(props)
			
			this.onStatusClick = this.onStatusClick.bind(this);
			this.onDeleteClick = this.onDeleteClick.bind(this);
		}
	onStatusClick(e) {
		e.preventDefault();
		
		fetch(`titans/${this.props.ttn._id}`, {
			method: 'PATCH',
			body:JSON.stringify ({
				Status: !this.props.ttn.Status
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then((res) => {
				if (res.status === 200) {
				console.log('Updated');
				this.props.dispatch(titanUpdateState(this.props.ttn._id));
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
				this.props.dispatch(titanDelete(this.props.ttn._id));
			}
			else{
				console.log('Not deleted');
			}
		});
	}
	
	render() {
        return (
                    <li className = {this.props.ttn.Status? "" : "completed"}>
                    <div className="form-check"> 
                        <label className="form-check-label"> 
                            <input className="checkbox" type="checkbox" checked={this.props.ttn.Status? "" : "checked"} onClick={this.onStatusClick} /> 
                                <i className="input-helper"></i>
                            <div className="widget-heading">{this.props.ttn.name} | {this.props.ttn.description}</div>
                        </label> 
                    </div> 
                    <i className="remove mdi mdi-close-circle-outline" onClick={this.onDeleteClick}></i>
                </li>
        )
    }
}

export default connect()(Titan);
