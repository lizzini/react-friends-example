var AppDispatcher = require('../dispatchers/AppDispatcher')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _friends = ['alice', 'bob', 'eve'];

var addFriend = function(newFriend) {
  console.log('inside addFriend()');
  _friends.push(newFriend);
  console.log('new friends: ' + _friends);
};

var FriendStore = assign({}, EventEmitter.prototype, {
    getFriends: function() {
      return {friends: _friends};
    },
  
    emitChange: function() {
      console.log('emitChange() called.');
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case 'ADD':
      console.log('FriendStore in motion');
      addFriend(action.friend)
      FriendStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = FriendStore;