import React from "react";

class Error extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		return (
			<div className="under-development-title">
				<img src="/static/images/warning.png" alt="" />
				<p>
					{this.props.statusCode
						? `Error ${this.props.statusCode} occurred on server`
						: "Error occurred on client"}
				</p>
			</div>
		);
	}
}

export default Error;