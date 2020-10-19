import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
	state = {
	  error: '',
	  errorInfo: '',
	  hasError: false,
	};

	static getDerivedStateFromError(error) {
	  return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
	  console.log({ error, errorInfo });
	  this.setState({ errorInfo });
	}

	render() {
		const { hasError } = this.state;
		if (hasError) {
			return (
				<div className="card my-5">
					<div className="card-header">
						<p>
							There was an error in loading this page.{' '}
							<span
								style={{ cursor: 'pointer', color: '#0077FF' }}
								onClick={() => {
								  window.location.reload();
								}}
							>
            Reload this page
          </span>{' '}
						</p>
					</div>
				</div>
			);
		}
		// next code block goes here
	  return this.props.children;
	}
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
