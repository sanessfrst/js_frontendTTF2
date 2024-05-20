import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { titanAdd } from './actions';

class TitanAddInner extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            description: ''
        };
        
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
    }
    
    onNameChange(e) {
        e.preventDefault();
        
        this.setState({
            name: e.target.value
        });
    }
    
    onDescriptionChange(e) {
        e.preventDefault();
        
        this.setState({
            description: e.target.value
        });
    }
    
    onAddFormSubmit(e) {
        e.preventDefault();
        
        fetch('/api/titans', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }).then((data) => {
            this.props.dispatch(titanAdd(data._id, data.name, data.description));
            this.props.history('/');
        }).catch((error) => {
            console.error('There was a problem with your fetch operation:', error);
        });
    }
    
    render() {
        return (
            <div className="card-body">
                <div className="card-hover-shadow-2x mb-3 card">
                    <div className="card-header-tab card-header">
                        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i className="fa fa-tasks"></i>&nbsp;Add Titan
                        </div>
                    </div>
                    <form onSubmit={this.onAddFormSubmit} className="form-inline">
                        <div className="widget-content">
                            <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Type" className="form-control todo-list-input"/>
                            <input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Pilot name" className="form-control todo-list-input"/>
                            <input type="submit" value="Add" className="btn btn-primary"/>
                        </div>
                    </form>
                    <div className="d-block text-right card-footer">
                        <NavLink to='/' className="btn btn-primary">Back to list</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

const TitanAdd = (props) => {
    return (
        <TitanAddInner {...props} history={useNavigate()} />
    );
}

export default connect()(TitanAdd);