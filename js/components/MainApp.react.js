var React = require('react');
var FriendBox = require('./FriendBox.react');
var FriendList = require('./FriendList.react');

var MainApp = React.createClass({
  render: function() {
    return (
      <div>
        <FriendList />
	<FriendBox />
      </div>
    )
  }
});

module.exports = MainApp;