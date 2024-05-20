import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Titan from './Titan';
import { titanDelete } from './actions';

class TitanList extends React.Component {
    constructor(props) {
        super(props);
        this.handleTitanDelete = this.handleTitanDelete.bind(this);
    }

    handleTitanDelete(_id) {
        this.props.dispatch(titanDelete(_id));
    }

    render() {
        return (
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card px-3">
                                <div className="card-body">
                                    <h4 className="card-title">Active Titans list</h4>
                                    <div className="list-wrapper">
                                        <ul className="d-flex flex-column-reverse todo-list">
										                                            {
                                                this.props.titans.map((ttn) => {
                                                    return (
                                                        <Titan ttn={ttn} key={ttn._id} onTitanDelete={this.handleTitanDelete} />
                                                    );

                                                })
												
                                            }
                                            <NavLink to='/add' className="add btn btn-primary font-weight-bold todo-list-add-btn">Add Titan</NavLink>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        titans: [...state.titans]
    };
}

export default connect(mapStateToProps)(TitanList);