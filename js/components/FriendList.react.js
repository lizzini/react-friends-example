var React = require('react')
var FriendStore = require('../stores/FriendStore')

var FriendList = React.createClass({
    getInitialState: function() {
	return {
	    friends: ['empty']
	}
    },

    componentWillMount: function() {
	console.log('will mount');

    },
    
    componentDidMount: function() {
	FriendStore.addChangeListener(this.getFriendsFromStore);
	this.getFriendsFromStore();
    },
    
    componentWillUnmount: function() {
	FriendStore.removeChangeListener(this.getFriendsFromStore);
    },

    getFriendsFromStore: function() {
	this.setState( FriendStore.getFriends() )
    },

    render: function() {
	return (
	    <ol>
	      {this.state.friends.map(function(f, i) { return <li key={i}>{f}</li>})}
	    </ol>

     )   
    }
})

module.exports = FriendList