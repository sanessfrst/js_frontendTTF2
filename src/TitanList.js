import React from 'react'

import Titan from './Titan';


class TitanList extends React.Component {
	render() {
		 return (
			<div className="App">
				<ul>
				{
					this.props.titans.map((ttn) => {
						return (
							<Titan ttn={ttn} onTitanDelete={this.props.onTitanDelete} key={ttn._id} />
						)
					})
				}
				</ul>
			</div>
		);
	}
}

export default TitanList;