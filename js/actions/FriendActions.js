var AppDispatcher = require('../dispatchers/AppDispatcher')

var FriendActions = {
    add: function(name) {
      AppDispatcher.dispatch({
        actionType: 'ADD',
        friend: name
      });
    }
};

module.exports = FriendActions;