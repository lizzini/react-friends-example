var React = require('react');
var FriendActions = require('../actions/FriendActions');

var FriendBox = React.createClass({
    save: function() {
    	var newFriend = this.refs.friend.getDOMNode().value.trim();
    	console.log('adding ' + newFriend + ' to FriendStore.');
    	FriendActions.add(newFriend);
    }, 
    render: function(){
	return (
	    <form>
              <input type="text" ref="friend" />
	      <button onClick={this.save}>Add Friend</button>
	    </form>
	)
    }
});

module.exports = FriendBox;