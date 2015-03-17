var React = require('react');

var Hello = React.createClass({
    render: function() {
	return (
	    <div>
	      <span>Hello, {this.props.name}</span>
	    </div>
	)
	
    }
});

module.exports = Hello;